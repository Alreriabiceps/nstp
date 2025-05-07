<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreStudentRequest;
use App\Http\Requests\UpdateStatusRequest;
use App\Http\Requests\UpdateStudentRequest;
use App\Models\Course;
use App\Models\Student;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Inertia\Inertia;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = Student::query()
            ->with('course')
            ->select('students.*');


        if ($request->enrollment_year !== null) {
            $query->where('enrollment_type', $request->enrollment_year);
        }

        if($request->search != null) {
            $query->whereAny(['last_name', 'first_name'], 'LIKE', '%'.$request->search.'%');
        }

        if ($request->school_year !== null) {
            $query->where('enrollment_year', $request->school_year);
        }


        if ($request->course_id !== null) {
            $query->where('course_id', $request->course_id);
        }
        
        // Add NSTP status filters
        if ($request->nstp1_status !== null) {
            $query->where('first_sem_status', $request->nstp1_status);
        }
        
        if ($request->nstp2_status !== null) {
            $query->where('second_sem_status', $request->nstp2_status);
        }
        
        $query->orderBy('seq_no');
        
        // Paginate with fewer records per page and ensure the paginator is fully converted to array
        $students = $query->paginate(10)->through(function ($student) {
            return $student;
        })->withQueryString();

        // Make sure we're getting pagination links
        $paginationLinks = $students->appends($request->all())->links()->toHtml();

        $courses = Course::query()
            ->orderBy('name')
            ->get();

        $graduationYears = [];
        $startYear = 2020;
        $currentYear = date('Y');

        for ($year = $startYear; $year <= $currentYear; $year++) {
            $graduationYears[] = $year.'-'.($year + 1);
        }

        // Prepare the data array
        $data = [
            'students' => $students,
            'courses' => $courses,
            'graduationYears' => $graduationYears,
            'filters' => $request->only(['search', 'course_id', 'school_year', 'nstp1_status', 'nstp2_status']),
            'pagination' => [
                'current_page' => $students->currentPage(),
                'last_page' => $students->lastPage(),
                'from' => $students->firstItem(),
                'to' => $students->lastItem(),
                'total' => $students->total(),
                'per_page' => $students->perPage(),
                'links' => $students->linkCollection()->toArray()
            ]
        ];

        // Check if this is an AJAX request for refreshing data
        if ($request->has('format') && $request->format === 'json') {
            return response()->json($data);
        }

        return Inertia::render('Students/Index', $data);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $graduationYears = [];
        $startYear = 2020;
        $currentYear = date('Y');

        for ($year = $startYear; $year <= $currentYear; $year++) {
            $graduationYears[] = $year.'/'.($year + 1);
        }

        return Inertia::render('Students/Create', [
            'courses' => Course::all(),
            'graduationYears' => $graduationYears,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreStudentRequest $request)
    {
        Student::create($request->validated());

        User::create([
            'username' => Str::upper($request->email),
            'password' => Hash::make(12345),
            'role' => 'student',
        ]);

        return redirect()->route('students.index');
    }

    public function show(Student $student)
    {
        return Inertia::render('Students/Show', [
            'student' => $student->load('course'),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Student $student)
    {
        $courses = Course::query()
            ->orderBy('name')
            ->get();

        $graduationYears = [];
        $startYear = 2020;
        $currentYear = date('Y');

        for ($year = $startYear; $year <= $currentYear; $year++) {
            $graduationYears[] = $year.'-'.($year + 1);
        }

        return  Inertia::render('Students/Edit', [
            'student' => $student,
            'courses' => $courses,
            'graduationYears' => $graduationYears,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateStudentRequest $request, Student $student)
    {
        $student->update($request->validated());

        return redirect()->route('students.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Student $student)
    {
        $student->delete();

        return redirect()->back();
    }

    public function resetPassword(Student $student)
    {
        $user = User::where('username', $student->email)->first();

        $user->update([
            'password' => Hash::make(12345678),
        ]);

        return redirect()->route('students.index');
    }

    public function updateStatus(UpdateStatusRequest $request)
    {
        Student::query()
            ->whereIn('id', $request->student_ids)
            ->update([
                'first_sem_status' => $request->first_sem_status === 'passed' ? 'passed' : 'failed',
                'second_sem_status' => $request->second_sem_status === 'passed' ? 'passed' : 'failed',
            ]);

        return redirect()->back();
    }

    /**
     * Get all student IDs based on the current filter criteria
     */
    public function getAllStudentIds(Request $request)
    {
        $query = Student::query();

        if ($request->enrollment_year !== null) {
            $query->where('enrollment_type', $request->enrollment_year);
        }

        if($request->search != null) {
            $query->whereAny(['last_name', 'first_name'], 'LIKE', '%'.$request->search.'%');
        }

        if ($request->school_year !== null) {
            $query->where('enrollment_year', $request->school_year);
        }

        if ($request->course_id !== null) {
            $query->where('course_id', $request->course_id);
        }
        
        // Add NSTP status filters
        if ($request->nstp1_status !== null) {
            $query->where('first_sem_status', $request->nstp1_status);
        }
        
        if ($request->nstp2_status !== null) {
            $query->where('second_sem_status', $request->nstp2_status);
        }
        
        $query->orderBy('seq_no');
        
        // Get only the IDs
        $studentIds = $query->pluck('id')->toArray();

        return response()->json([
            'student_ids' => $studentIds,
            'total' => count($studentIds)
        ]);
    }
}
