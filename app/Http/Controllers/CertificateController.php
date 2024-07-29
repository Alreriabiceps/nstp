<?php

namespace App\Http\Controllers;

use App\Models\Student;
use App\Services\CertificateService;
use Inertia\Inertia;

class CertificateController extends Controller
{
    public function __construct(private CertificateService $certificateService)
    {
    }

    public function index()
    {
        $student = Student::with('course')->where('user_id', auth()->id())->first();
        $this->certificateService->generateCertificate($student, true, null);
        $certificate = '/temporary-student-certificate/'.$student->id.'-nstp-certificate.pdf';

        return Inertia::render('Certificate', [
            'student' => $student,
            'certificate' => $certificate,
        ]);
    }
}
