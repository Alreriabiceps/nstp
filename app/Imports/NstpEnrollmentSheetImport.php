<?php

namespace App\Imports;

use App\Models\Course;
use App\Models\Student;
use App\Models\User;
use App\Role;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithBatchInserts;
use Maatwebsite\Excel\Concerns\WithChunkReading;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class NstpEnrollmentSheetImport implements ToCollection, WithBatchInserts, WithHeadingRow, WithChunkReading, ShouldQueue
{
    public function collection(Collection $rows)
    {
        Log::info('Starting import process. Row count: ' . count($rows));
        
        if (count($rows) === 0) {
            Log::warning('No rows found in the import file');
            return;
        }
        
        // Log the keys of the first row to check column names
        if ($rows->first()) {
            Log::info('Available columns: ' . json_encode(array_keys($rows->first()->toArray())));
        }
        
        $password = Hash::make(12345678);
        foreach ($rows as $index => $row) {
            try {
                Log::info('Processing row: ' . ($index + 1));
                
                if (!isset($row['nstp_enrollment_year'])) {
                    Log::warning('Missing nstp_enrollment_year on row: ' . ($index + 1));
                    continue;
                }
                
                if (!isset($row['programcourse'])) {
                    Log::warning('Missing programcourse on row: ' . ($index + 1));
                    continue;
                }
                
                $courseId = $this->findCourseId($row['programcourse']);
                Log::info('Found course ID: ' . $courseId . ' for ' . $row['programcourse']);
                
                if ($row['nstp_enrollment_year'] && $courseId > 0) {
                    $studentData = [
                        'first_name' => (string)$row['first_name'],
                        'last_name' => (string)$row['last_name'],
                        'middle_name' => (string)$row['middle_name'],
                        'extension_name' => (string)$row['extension_name'],
                        'sex' => (string)$row['sex_mf'],
                        'email' => (string)$row['email_address'],
                        'phone' => (string)$row['contact_number_mobile_number'],
                        'region' => (string)$row['region'],
                        'province' => (string)$row['province'],
                        'city' => (string)$row['towncity_municipality'],
                        'brgy' => (string)$row['street_brgy'],
                        'enrollment_type' => $row['nstp_component_cwtsltsrotc'],
                        'course_id' => $courseId,
                        'year_level' => $row['year_level'] ?? 1,
                    ];
                    
                    Log::info('Creating/updating student with seq_no: ' . $row['seqno']);
                    
                    $student = Student::firstOrCreate([
                        'seq_no' => (string)$row['seqno'],
                        'enrollment_year' => (string)$row['nstp_enrollment_year'],
                    ], $studentData);

                    if ($student->email) {
                        Log::info('Creating user for email: ' . $student->email);
                        
                        $user = User::firstOrCreate([
                            'username' => $student->email,
                        ], [
                            'role' => Role::Student,
                            'password' => $password,
                        ]);

                        $student->update([
                            'user_id' => $user->id,
                        ]);
                    }
                }
            } catch (\Exception $e) {
                Log::error('Error processing row ' . ($index + 1) . ': ' . $e->getMessage());
                Log::error($e->getTraceAsString());
                // Continue with next row instead of failing the entire import
                continue;
            }
        }
        
        Log::info('Import process completed');
    }

    public function headingRow(): int
    {
        return 2;
    }

    public function batchSize(): int
    {
        return config('app.max_batch_size') ?? 1000;
    }

    private function findCourseId($courseName): int
    {
        $course = Course::whereRaw('LOWER(name) = LOWER(?)', [Str::lower($courseName)])->first();
        if (!$course) {
            Log::warning('Course not found: ' . $courseName);
        }
        return $course ? $course->id : 0;
    }

    public function chunkSize(): int
    {
        return 1000;
    }
}
