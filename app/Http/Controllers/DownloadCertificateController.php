<?php

namespace App\Http\Controllers;

use App\Http\Requests\DownloadCertificateRequest;
use App\Models\Student;
use App\Services\CertificateService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use ZipArchive;
use Illuminate\Support\Facades\File;
use Carbon\Carbon;

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
        try {
            Log::info('Certificate download request received', [
                'student_ids' => $request->student_ids,
                'certificate_date' => $request->certificate_date
            ]);
            
            // First, get all the requested students regardless of status
            $allStudents = Student::whereIn('id', $request->student_ids)->get();
            
            if ($allStudents->isEmpty()) {
                Log::warning('No students found for certificate download', [
                    'student_ids' => $request->student_ids
                ]);
                return response()->json([
                    'message' => 'No students found with the provided IDs.'
                ], 404);
            }
            
            // Filter to only students who passed both NSTP 1 and 2
            $eligibleStudents = $allStudents->filter(function($student) {
                return $student->first_sem_status === 1 && $student->second_sem_status === 1;
            });
            
            Log::info('Filtered eligible students', [
                'total_students' => $allStudents->count(),
                'eligible_students' => $eligibleStudents->count()
            ]);
            
            if ($eligibleStudents->isEmpty()) {
                Log::warning('No eligible students for certificate download', [
                    'total_students' => $allStudents->count()
                ]);
                return response()->json([
                    'message' => 'No eligible students found. Students must pass both NSTP 1 and NSTP 2 to receive certificates.'
                ], 404);
            }

            $certifcateDate = $request->certificate_date;
            $files = [];

            // Record certificate printing timestamp
            $now = Carbon::now();
            $userId = Auth::id() ?? 1; // Default to user ID 1 if not logged in
            $userName = Auth::user() ? Auth::user()->username : 'system';

            // Update all eligible students to mark certificates as printed
            $updateCount = Student::whereIn('id', $eligibleStudents->pluck('id')->toArray())
                ->update([
                    'certificate_printed_at' => $now,
                    'certificate_printed_by' => $userName
                ]);
                
            Log::info("Updated certificate print status for {$updateCount} students");

            foreach ($eligibleStudents as $student) {
                try {
                    $filePath = $this->certificateService->generateCertificate($student, false, $certifcateDate);
                    Log::info("Generated certificate for student", [
                        'student_id' => $student->id,
                        'file_path' => $filePath
                    ]);
                    $files[] = $filePath;
                } catch (\Exception $e) {
                    Log::error("Error generating certificate for student {$student->id}: " . $e->getMessage());
                }
            }
            
            if (empty($files)) {
                Log::error("No certificate files were generated");
                return response()->json(['message' => 'Failed to generate any certificate files'], 500);
            }

            // Ensure temp directory exists
            $tempDir = public_path('temp');
            if (!File::exists($tempDir)) {
                File::makeDirectory($tempDir, 0755, true);
            }

            // Create a zip file
            $zipPath = public_path('temp/nstp-certificates.zip');
            $zip = new ZipArchive;

            if ($zip->open($zipPath, ZipArchive::CREATE | ZipArchive::OVERWRITE) === TRUE) {
                $addedFiles = 0;
                foreach ($files as $file) {
                    if (File::exists($file)) {
                        $zip->addFile($file, basename($file));
                        $addedFiles++;
                    } else {
                        Log::warning("Certificate file not found: {$file}");
                    }
                }
                $zip->close();
                
                Log::info("Added {$addedFiles} files to zip archive");
            } else {
                Log::error("Failed to create zip file at {$zipPath}");
                return response()->json(['message' => 'Failed to create zip file'], 500);
            }

            // Delete the temporary certificate files
            foreach ($files as $file) {
                if (File::exists($file)) {
                    File::delete($file);
                }
            }

            if (!File::exists($zipPath)) {
                Log::error("Zip file not found after creation: {$zipPath}");
                return response()->json(['message' => 'Failed to create certificates archive'], 500);
            }

            Log::info("Certificates generated and marked as printed for " . count($eligibleStudents) . " students by user: " . $userName);
            
            return response()->download($zipPath, 'nstp-certificates.zip')->deleteFileAfterSend(true);
        } catch (\Exception $e) {
            Log::error("Error generating certificates: " . $e->getMessage());
            Log::error($e->getTraceAsString());
            return response()->json(['message' => 'Error generating certificates: ' . $e->getMessage()], 500);
        }
    }
}
