<?php

namespace App\Http\Controllers;

use App\Models\Student;
use App\Models\Course;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;

class NstpStatusController extends Controller
{
    public function index()
    {
        // Load all students with their course information
        $students = Student::with('course')->get();
        
        // Ensure status values are set
        $students->each(function($student) {
            // Default to STATUS_PENDING (2) if values are null or empty
            if (empty($student->first_sem_status) && $student->first_sem_status !== 0) {
                $student->first_sem_status = Student::STATUS_PENDING;
            }
            if (empty($student->second_sem_status) && $student->second_sem_status !== 0) {
                $student->second_sem_status = Student::STATUS_PENDING;
            }
        });
        
        $courses = Course::orderBy('name')->get();
        
        // Get unique graduation years from students
        $graduationYears = Student::select('enrollment_year')
            ->whereNotNull('enrollment_year')
            ->distinct()
            ->pluck('enrollment_year')
            ->sort()
            ->values()
            ->all();
        
        // Count statistics for display
        $stats = [
            'nstp1' => [
                'pending' => $students->where('first_sem_status', Student::STATUS_PENDING)->count(),
                'passed' => $students->where('first_sem_status', Student::STATUS_PASSED)->count(),
                'failed' => $students->where('first_sem_status', Student::STATUS_FAILED)->count(),
            ],
            'nstp2' => [
                'pending' => $students->where('second_sem_status', Student::STATUS_PENDING)->count(),
                'passed' => $students->where('second_sem_status', Student::STATUS_PASSED)->count(),
                'failed' => $students->where('second_sem_status', Student::STATUS_FAILED)->count(),
            ]
        ];
        
        return Inertia::render('Students/NstpStatus', [
            'students' => $students,
            'courses' => $courses,
            'graduationYears' => $graduationYears,
            'stats' => $stats,
            'flash' => [
                'success' => session('success'),
                'error' => session('error'),
            ],
        ]);
    }

    public function markNstp1Failed(Request $request)
    {
        // Log the request data for debugging
        \Log::info('NSTP1 Failed Request:', [
            'all_data' => $request->all(),
            'student_ids' => $request->student_ids,
        ]);
        
        $studentIds = $request->student_ids;
        
        if (empty($studentIds)) {
            return redirect()->back()->with('error', 'No students selected');
        }
        
        try {
            // Ensure all IDs are properly cast to integers
            $studentIds = array_map('intval', $studentIds);
            \Log::info('NSTP1 Failed - Processing IDs:', ['processed_ids' => $studentIds]);
            
            // Use a raw query with proper quoting and update timestamp
            $now = now()->format('Y-m-d H:i:s');
            DB::update("update students set first_sem_status = ?, updated_at = ? where id in (".implode(',', $studentIds).")", [Student::STATUS_FAILED, $now]);
                
            return redirect()->back()->with('success', 'Students marked as failed for NSTP 1');
        } catch (\Exception $e) {
            \Log::error('Error marking NSTP1 students as failed: ' . $e->getMessage());
            return redirect()->back()->with('error', 'An error occurred while updating student statuses: ' . $e->getMessage());
        }
    }
    
    public function markNstp2Failed(Request $request)
    {
        // Log the request data for debugging
        \Log::info('NSTP2 Failed Request:', [
            'all_data' => $request->all(),
            'student_ids' => $request->student_ids,
        ]);
        
        $studentIds = $request->student_ids;
        
        if (empty($studentIds)) {
            return redirect()->back()->with('error', 'No students selected');
        }
        
        try {
            // Ensure all IDs are properly cast to integers
            $studentIds = array_map('intval', $studentIds);
            \Log::info('NSTP2 Failed - Processing IDs:', ['processed_ids' => $studentIds]);
            
            // Use a raw query with proper quoting and update timestamp
            $now = now()->format('Y-m-d H:i:s');
            DB::update("update students set second_sem_status = ?, updated_at = ? where id in (".implode(',', $studentIds).")", [Student::STATUS_FAILED, $now]);
                
            return redirect()->back()->with('success', 'Students marked as failed for NSTP 2');
        } catch (\Exception $e) {
            \Log::error('Error marking NSTP2 students as failed: ' . $e->getMessage());
            return redirect()->back()->with('error', 'An error occurred while updating student statuses: ' . $e->getMessage());
        }
    }
    
    public function submitNstp1(Request $request)
    {
        try {
            // Get a count of pending students first
            $pendingCount = Student::where('first_sem_status', Student::STATUS_PENDING)->count();
            \Log::info('NSTP1 Submit - Found pending students:', ['count' => $pendingCount]);
            
            // Mark all pending students as passed using a raw query with proper parameter binding
            $now = now()->format('Y-m-d H:i:s');
            $updated = DB::update('update students set first_sem_status = ?, updated_at = ? where first_sem_status = ?', [Student::STATUS_PASSED, $now, Student::STATUS_PENDING]);
            
            \Log::info('NSTP1 Submit - Marked as passed:', ['updated_count' => $updated]);
                
            return redirect()->back()->with('success', "All pending students ($updated) marked as passed for NSTP 1");
        } catch (\Exception $e) {
            \Log::error('Error marking NSTP1 students as passed: ' . $e->getMessage());
            return redirect()->back()->with('error', 'An error occurred while updating student statuses: ' . $e->getMessage());
        }
    }
    
    public function submitNstp2(Request $request)
    {
        try {
            // Get a count of pending students first
            $pendingCount = Student::where('second_sem_status', Student::STATUS_PENDING)->count();
            \Log::info('NSTP2 Submit - Found pending students:', ['count' => $pendingCount]);
            
            // Mark all pending students as passed using a raw query with proper parameter binding
            $now = now()->format('Y-m-d H:i:s');
            $updated = DB::update('update students set second_sem_status = ?, updated_at = ? where second_sem_status = ?', [Student::STATUS_PASSED, $now, Student::STATUS_PENDING]);
            
            \Log::info('NSTP2 Submit - Marked as passed:', ['updated_count' => $updated]);
                
            return redirect()->back()->with('success', "All pending students ($updated) marked as passed for NSTP 2");
        } catch (\Exception $e) {
            \Log::error('Error marking NSTP2 students as passed: ' . $e->getMessage());
            return redirect()->back()->with('error', 'An error occurred while updating student statuses: ' . $e->getMessage());
        }
    }
    
    public function resetNstp1Status(Request $request)
    {
        $studentIds = $request->student_ids;
        
        if (empty($studentIds)) {
            return redirect()->back()->with('error', 'No students selected');
        }
        
        try {
            // Ensure all IDs are properly cast to integers
            $studentIds = array_map('intval', $studentIds);
            
            // Use a raw query with proper quoting and update timestamp
            $now = now()->format('Y-m-d H:i:s');
            DB::update("update students set first_sem_status = ?, updated_at = ? where id in (".implode(',', $studentIds).")", [Student::STATUS_PENDING, $now]);
                
            return redirect()->back()->with('success', 'Students reset to pending for NSTP 1');
        } catch (\Exception $e) {
            \Log::error('Error resetting NSTP1 students to pending: ' . $e->getMessage());
            return redirect()->back()->with('error', 'An error occurred while updating student statuses: ' . $e->getMessage());
        }
    }
    
    public function resetNstp2Status(Request $request)
    {
        $studentIds = $request->student_ids;
        
        if (empty($studentIds)) {
            return redirect()->back()->with('error', 'No students selected');
        }
        
        try {
            // Ensure all IDs are properly cast to integers
            $studentIds = array_map('intval', $studentIds);
            
            // Use a raw query with proper quoting and update timestamp
            $now = now()->format('Y-m-d H:i:s');
            DB::update("update students set second_sem_status = ?, updated_at = ? where id in (".implode(',', $studentIds).")", [Student::STATUS_PENDING, $now]);
                
            return redirect()->back()->with('success', 'Students reset to pending for NSTP 2');
        } catch (\Exception $e) {
            \Log::error('Error resetting NSTP2 students to pending: ' . $e->getMessage());
            return redirect()->back()->with('error', 'An error occurred while updating student statuses: ' . $e->getMessage());
        }
    }
    
    /**
     * Fix NSTP status values in the database
     */
    public function fixNstpStatus()
    {
        try {
            // Define status mappings for the database
            $STATUS_PASSED = 1;  // Use integer 1 instead of string 'passed'
            $STATUS_FAILED = 0;  // Use integer 0 instead of string 'failed'
            $STATUS_PENDING = 2; // Use integer 2 instead of string 'pending'
            
            // Log current status for debugging
            \Log::info('Starting NSTP Status Fix');
            
            // First, let's see what we're dealing with
            $studentsWithStringStatus = DB::table('students')
                ->whereIn('first_sem_status', ['passed', 'failed', 'pending'])
                ->orWhereIn('second_sem_status', ['passed', 'failed', 'pending'])
                ->count();
                
            \Log::info("Found {$studentsWithStringStatus} students with string status values");
            
            // Set default values for any null fields first to avoid errors
            $nullUpdated1 = DB::update("UPDATE students SET first_sem_status = ? WHERE first_sem_status IS NULL", [$STATUS_PENDING]);
            $nullUpdated2 = DB::update("UPDATE students SET second_sem_status = ? WHERE second_sem_status IS NULL", [$STATUS_PENDING]);
            
            \Log::info("Updated null values: first_sem_status={$nullUpdated1}, second_sem_status={$nullUpdated2}");
            
            // Fix string statuses one by one to avoid conversion issues
            // We'll use raw queries with explicit type conversion
            
            // First semester: passed → 1
            try {
                $updatedPassed1 = DB::statement("UPDATE students SET first_sem_status = {$STATUS_PASSED} WHERE first_sem_status = 'passed'");
                \Log::info("Updated first_sem_status 'passed' to {$STATUS_PASSED}");
            } catch (\Exception $e) {
                \Log::error("Error updating first_sem_status 'passed': " . $e->getMessage());
            }
            
            // First semester: failed → 0
            try {
                $updatedFailed1 = DB::statement("UPDATE students SET first_sem_status = {$STATUS_FAILED} WHERE first_sem_status = 'failed'");
                \Log::info("Updated first_sem_status 'failed' to {$STATUS_FAILED}");
            } catch (\Exception $e) {
                \Log::error("Error updating first_sem_status 'failed': " . $e->getMessage());
            }
            
            // First semester: pending → 2
            try {
                $updatedPending1 = DB::statement("UPDATE students SET first_sem_status = {$STATUS_PENDING} WHERE first_sem_status = 'pending'");
                \Log::info("Updated first_sem_status 'pending' to {$STATUS_PENDING}");
            } catch (\Exception $e) {
                \Log::error("Error updating first_sem_status 'pending': " . $e->getMessage());
            }
            
            // Second semester: passed → 1
            try {
                $updatedPassed2 = DB::statement("UPDATE students SET second_sem_status = {$STATUS_PASSED} WHERE second_sem_status = 'passed'");
                \Log::info("Updated second_sem_status 'passed' to {$STATUS_PASSED}");
            } catch (\Exception $e) {
                \Log::error("Error updating second_sem_status 'passed': " . $e->getMessage());
            }
            
            // Second semester: failed → 0
            try {
                $updatedFailed2 = DB::statement("UPDATE students SET second_sem_status = {$STATUS_FAILED} WHERE second_sem_status = 'failed'");
                \Log::info("Updated second_sem_status 'failed' to {$STATUS_FAILED}");
            } catch (\Exception $e) {
                \Log::error("Error updating second_sem_status 'failed': " . $e->getMessage());
            }
            
            // Second semester: pending → 2
            try {
                $updatedPending2 = DB::statement("UPDATE students SET second_sem_status = {$STATUS_PENDING} WHERE second_sem_status = 'pending'");
                \Log::info("Updated second_sem_status 'pending' to {$STATUS_PENDING}");
            } catch (\Exception $e) {
                \Log::error("Error updating second_sem_status 'pending': " . $e->getMessage());
            }
            
            // Force all remaining values to be valid integers
            try {
                $updatedEmptyFirst = DB::update("UPDATE students SET first_sem_status = ? WHERE first_sem_status = ''", [$STATUS_PENDING]);
                $updatedEmptySecond = DB::update("UPDATE students SET second_sem_status = ? WHERE second_sem_status = ''", [$STATUS_PENDING]);
                \Log::info("Updated empty values: first_sem_status={$updatedEmptyFirst}, second_sem_status={$updatedEmptySecond}");
            } catch (\Exception $e) {
                \Log::error("Error updating empty values: " . $e->getMessage());
            }
            
            // Check final status after updates
            $finalStatuses = DB::table('students')
                ->selectRaw('first_sem_status, second_sem_status, count(*) as count')
                ->groupBy('first_sem_status', 'second_sem_status')
                ->get();
                
            \Log::info('Final NSTP status counts:', $finalStatuses->toArray());
            
            return redirect()->route('nstp.status')->with('success', "NSTP status values have been fixed. Check the logs for details.");
        } catch (\Exception $e) {
            \Log::error('Error fixing NSTP status: ' . $e->getMessage());
            return redirect()->back()->with('error', 'An error occurred while fixing student statuses: ' . $e->getMessage());
        }
    }

    /**
     * Reset all students to pending status for NSTP 1
     */
    public function resetAllNstp1()
    {
        try {
            // Use a raw query with proper quoting and update timestamp
            $now = now()->format('Y-m-d H:i:s');
            $updated = DB::update("UPDATE students SET first_sem_status = ?, updated_at = ?", [Student::STATUS_PENDING, $now]);
                
            return redirect()->back()->with('success', "All students reset to pending status for NSTP 1 ($updated students updated)");
        } catch (\Exception $e) {
            \Log::error('Error resetting all NSTP1 students to pending: ' . $e->getMessage());
            return redirect()->back()->with('error', 'An error occurred while resetting student statuses: ' . $e->getMessage());
        }
    }
    
    /**
     * Reset all students to pending status for NSTP 2
     */
    public function resetAllNstp2()
    {
        try {
            // Use a raw query with proper quoting and update timestamp
            $now = now()->format('Y-m-d H:i:s');
            $updated = DB::update("UPDATE students SET second_sem_status = ?, updated_at = ?", [Student::STATUS_PENDING, $now]);
                
            return redirect()->back()->with('success', "All students reset to pending status for NSTP 2 ($updated students updated)");
        } catch (\Exception $e) {
            \Log::error('Error resetting all NSTP2 students to pending: ' . $e->getMessage());
            return redirect()->back()->with('error', 'An error occurred while resetting student statuses: ' . $e->getMessage());
        }
    }
    
    /**
     * List all failed students for NSTP 1
     */
    public function listFailedNstp1()
    {
        // Load all students with their course information
        $students = Student::with('course')
            ->where('first_sem_status', Student::STATUS_FAILED)
            ->get();
        
        $courses = Course::orderBy('name')->get();
        
        // Get unique graduation years from students
        $graduationYears = Student::select('enrollment_year')
            ->whereNotNull('enrollment_year')
            ->distinct()
            ->pluck('enrollment_year')
            ->sort()
            ->values()
            ->all();
        
        // Count statistics for display
        $stats = [
            'nstp1' => [
                'pending' => Student::where('first_sem_status', Student::STATUS_PENDING)->count(),
                'passed' => Student::where('first_sem_status', Student::STATUS_PASSED)->count(),
                'failed' => $students->count(),
            ],
            'nstp2' => [
                'pending' => Student::where('second_sem_status', Student::STATUS_PENDING)->count(),
                'passed' => Student::where('second_sem_status', Student::STATUS_PASSED)->count(),
                'failed' => Student::where('second_sem_status', Student::STATUS_FAILED)->count(),
            ]
        ];
        
        return Inertia::render('Students/NstpStatus', [
            'students' => $students,
            'courses' => $courses,
            'graduationYears' => $graduationYears,
            'stats' => $stats,
            'showFailedFilter' => true,
            'failedFilter' => 'nstp1',
            'flash' => [
                'success' => session('success'),
                'error' => session('error'),
            ],
        ]);
    }
    
    /**
     * List all failed students for NSTP 2
     */
    public function listFailedNstp2()
    {
        // Load all students with their course information
        $students = Student::with('course')
            ->where('second_sem_status', Student::STATUS_FAILED)
            ->get();
        
        $courses = Course::orderBy('name')->get();
        
        // Get unique graduation years from students
        $graduationYears = Student::select('enrollment_year')
            ->whereNotNull('enrollment_year')
            ->distinct()
            ->pluck('enrollment_year')
            ->sort()
            ->values()
            ->all();
        
        // Count statistics for display
        $stats = [
            'nstp1' => [
                'pending' => Student::where('first_sem_status', Student::STATUS_PENDING)->count(),
                'passed' => Student::where('first_sem_status', Student::STATUS_PASSED)->count(),
                'failed' => Student::where('first_sem_status', Student::STATUS_FAILED)->count(),
            ],
            'nstp2' => [
                'pending' => Student::where('second_sem_status', Student::STATUS_PENDING)->count(),
                'passed' => Student::where('second_sem_status', Student::STATUS_PASSED)->count(),
                'failed' => $students->count(),
            ]
        ];
        
        return Inertia::render('Students/NstpStatus', [
            'students' => $students,
            'courses' => $courses,
            'graduationYears' => $graduationYears,
            'stats' => $stats,
            'showFailedFilter' => true,
            'failedFilter' => 'nstp2',
            'flash' => [
                'success' => session('success'),
                'error' => session('error'),
            ],
        ]);
    }
} 