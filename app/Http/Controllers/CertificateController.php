<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CertificateController extends Controller
{
    public function index()
    {
        $student = Student::with('course')->where('user_id', auth()->id())->first();

        return Inertia::render('Certificate', [
            'student' => $student,
        ]);
    }
}
