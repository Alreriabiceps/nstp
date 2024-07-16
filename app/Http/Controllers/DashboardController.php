<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $enrolledPerYear = Student::where('enrollment_status', 'Enrolled')->groupBy('enrollment_year')->selectRaw('enrollment_year, count(*) as total')->get();
        $graduatePerYear = Student::where('enrollment_status', 'Enrolled')->groupBy('enrollment_year')->selectRaw('enrollment_year, count(*) as total')->get();
        $failedPerYear = Student::where('enrollment_status', 'Dropped')->groupBy('enrollment_year')->selectRaw('enrollment_year, count(*) as total')->get();

        return Inertia::render('Dashboard', [
            'enrolledPerYear' => $enrolledPerYear,
            'graduatePerYear' => $graduatePerYear,
            'failedPerYear' => $failedPerYear,
        ]);
    }
}
