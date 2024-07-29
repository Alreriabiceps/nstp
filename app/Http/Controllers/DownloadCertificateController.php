<?php

namespace App\Http\Controllers;

use App\Http\Requests\DownloadCertificateRequest;
use App\Models\Student;
use App\Services\CertificateService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use ZipArchive;

class DownloadCertificateController extends Controller
{
    public function __construct(private CertificateService $certificateService)
    {
    }
    /**
     * Handle the incoming request.
     */
    public function __invoke(DownloadCertificateRequest $request)
    {
        $students = Student::whereIn('id', $request->student_ids)->get();

        $certifcateDate = $request->certificate_date;

        foreach ($students as $student) {
            $filePath = $this->certificateService->generateCertificate($student, false, $certifcateDate);
            $files[] = $filePath;
        }

        // Create a zip file
        $zipPath = public_path('temp/nstp-certificates.zip');
        $zip = new ZipArchive;

        if ($zip->open($zipPath, ZipArchive::CREATE) === TRUE) {
            foreach ($files as $file) {
                $zip->addFile($file, basename($file));
            }
            $zip->close();
        }

        // Delete the temporary certificate files
        foreach ($files as $file) {
            unlink($file);
        }

        return response()->download($zipPath, 'nstp-certificates.zip')->deleteFileAfterSend(true);
    }
}
