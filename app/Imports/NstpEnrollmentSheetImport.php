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
        Log::info('Students: ' . $rows);
        $password = Hash::make(12345678);
        foreach ($rows as $row) {
            if ($row['nstp_enrollment_year']) {

                if ($this->findCourseId($row['programcourse']) > 0) {
                    $student = Student::firstOrCreate([
                        'seq_no' => (string)$row['seqno'],
                        'enrollment_year' => (string)$row['nstp_enrollment_year'],
                    ], [
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
                        'course_id' => $this->findCourseId($row['programcourse']) ?? null,
                        'year_level' => $row['year_level'] ?? 1,
                    ]);

                    if ($student->email) {
                        $user = User::firstOrCreate([
                            'username' => $student->email,
                            'role' => Role::Student,
                            'password' => $password,
                        ]);

                        $student->update([
                            'user_id' => $user->id,
                        ]);
                    }
                }
            }
        }
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
        return $course ? $course->id : 0;
    }

    public function chunkSize(): int
    {
        return 1000;
    }
}
