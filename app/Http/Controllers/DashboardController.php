<?php

namespace App\Http\Controllers;

use App\Models\Student;
use App\Models\Course;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        // Get all students
        $students = Student::with('course')->get();

        // Get all courses
        $courses = Course::all();

        // Certificate analytics
        $certificatesPrinted = Student::whereNotNull('certificate_printed_at')->count();
        $certificatesNotPrinted = Student::whereNull('certificate_printed_at')
            ->where('first_sem_status', 1)
            ->where('second_sem_status', 1)
            ->count();
            
        // Certificate printing trend (last 6 months)
        $certificateTrend = Student::whereNotNull('certificate_printed_at')
            ->where('certificate_printed_at', '>=', Carbon::now()->subMonths(6))
            ->select(DB::raw('DATE_FORMAT(certificate_printed_at, "%Y-%m") as month'), DB::raw('count(*) as total'))
            ->groupBy('month')
            ->orderBy('month', 'asc')
            ->get();
            
        // First semester vs second semester performance
        $semesterPerformance = [
            'first_sem_passed' => Student::where('first_sem_status', 1)->count(),
            'first_sem_failed' => Student::where('first_sem_status', 0)->count(),
            'first_sem_pending' => Student::where('first_sem_status', 2)->count(),
            'second_sem_passed' => Student::where('second_sem_status', 1)->count(),
            'second_sem_failed' => Student::where('second_sem_status', 0)->count(),
            'second_sem_pending' => Student::where('second_sem_status', 2)->count(),
        ];
        
        // Recent certificate printing activity
        $recentCertificates = Student::whereNotNull('certificate_printed_at')
            ->with(['course', 'user'])
            ->orderBy('certificate_printed_at', 'desc')
            ->limit(5)
            ->get();

        // Enrollment statistics by year
        $enrolledPerYear = Student::where('enrollment_status', 'Enrolled')
            ->groupBy('enrollment_year')
            ->selectRaw('enrollment_year, count(*) as total')
            ->get();

        // Graduate statistics by year
        $graduatePerYear = Student::where('enrollment_status', 'Graduate')
            ->groupBy('enrollment_year')
            ->selectRaw('enrollment_year, count(*) as total')
            ->get();

        // Failed/Dropped statistics by year
        $failedPerYear = Student::where('enrollment_status', 'Dropped')
            ->groupBy('enrollment_year')
            ->selectRaw('enrollment_year, count(*) as total')
            ->get();

        // NEW: Top 5 courses by student enrollment
        $topCourses = DB::table('students')
            ->join('courses', 'students.course_id', '=', 'courses.id')
            ->select('courses.name as course_name', DB::raw('count(*) as total'))
            ->groupBy('courses.name')
            ->orderBy('total', 'desc')
            ->limit(5)
            ->get();
            
        // NEW: Students who need certificates (passed both semesters but no certificate)
        $needCertificates = Student::where('first_sem_status', 1)
            ->where('second_sem_status', 1)
            ->whereNull('certificate_printed_at')
            ->with('course')
            ->limit(5)
            ->get();
            
        // NEW: Recent student activity (newest students)
        $recentStudents = Student::orderBy('created_at', 'desc')
            ->with('course')
            ->limit(5)
            ->get();
            
        // NEW: Status overview
        $statusOverview = [
            'both_passed' => Student::where('first_sem_status', 1)->where('second_sem_status', 1)->count(),
            'first_passed_only' => Student::where('first_sem_status', 1)->where('second_sem_status', '!=', 1)->count(),
            'second_passed_only' => Student::where('first_sem_status', '!=', 1)->where('second_sem_status', 1)->count(),
            'none_passed' => Student::where('first_sem_status', '!=', 1)->where('second_sem_status', '!=', 1)->count(),
        ];
        
        // NEW: Students with missing information
        $studentsWithMissingInfo = Student::where(function($query) {
                $query->whereNull('student_id')
                    ->orWhere('student_id', '')
                    ->orWhereNull('email')
                    ->orWhere('email', '')
                    ->orWhereNull('phone')
                    ->orWhere('phone', '')
                    ->orWhereNull('nstp_serial_no')
                    ->orWhere('nstp_serial_no', '')
                    ->orWhereNull('course_id')
                    ->orWhereNull('region')
                    ->orWhereNull('province')
                    ->orWhereNull('city')
                    ->orWhereNull('brgy');
            })
            ->with('course')
            ->orderBy('last_name')
            ->limit(5)
            ->get();
            
        // Count of students with missing information
        $missingInfoCount = Student::where(function($query) {
                $query->whereNull('student_id')
                    ->orWhere('student_id', '')
                    ->orWhereNull('email')
                    ->orWhere('email', '')
                    ->orWhereNull('phone')
                    ->orWhere('phone', '')
                    ->orWhereNull('nstp_serial_no')
                    ->orWhere('nstp_serial_no', '')
                    ->orWhereNull('course_id')
                    ->orWhereNull('region')
                    ->orWhereNull('province')
                    ->orWhereNull('city')
                    ->orWhereNull('brgy');
            })
            ->count();

        return Inertia::render('Dashboard', [
            'students' => $students,
            'courses' => $courses,
            'certificatesPrinted' => $certificatesPrinted,
            'certificatesNotPrinted' => $certificatesNotPrinted,
            'certificateTrend' => $certificateTrend,
            'semesterPerformance' => $semesterPerformance,
            'recentCertificates' => $recentCertificates,
            'enrolledPerYear' => $enrolledPerYear,
            'graduatePerYear' => $graduatePerYear,
            'failedPerYear' => $failedPerYear,
            // Removed: componentAnalytics, genderByComponent, componentTypes
            
            // NEW data
            'topCourses' => $topCourses,
            'needCertificates' => $needCertificates,
            'recentStudents' => $recentStudents,
            'statusOverview' => $statusOverview,
            'studentsWithMissingInfo' => $studentsWithMissingInfo,
            'missingInfoCount' => $missingInfoCount,
        ]);
    }
}
