<?php

namespace App\Imports;

use App\Models\Course;
use App\Models\Student;
use App\Models\User;
use App\Role;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithBatchInserts;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class NstpEnrollmentSheetImport implements ToCollection, WithBatchInserts, WithHeadingRow
{
    public function collection(Collection $rows)
    {
        Log::info('Students: ' . $rows);
        $password = Hash::make(1);
        foreach ($rows as $row) {
            if($row['nstp_enrollment_year']) {
                $student = Student::firstOrCreate([
                    'seq_no' => $row['seqno'],
                ], [
                    'first_name' => (string)$row['first_name'],
                    'last_name' => (string)$row['last_name'],
                    'middle_name' => (string)$row['middle_name'],
                    'extension_name' => (string)$row['extension_name'],

                    'sex' => (string)$row['sex_mf'],

                    'email' => (string)$row['email_address'],
                    'phone' => (string)$row['contact_number_mobile_number'],

                    'region' =>(string)$row['region'],
                    'province' => (string)$row['province'],
                    'city' => (string)$row['towncity_municipality'],
                    'brgy' => (string)$row['street_brgy'],

                    'enrollment_type' => $row['nstp_component_cwtsltsrotc'],
                    'enrollment_year' => $row['nstp_enrollment_year'],

                    'course_id' => $this->findCourseId($row['programcourse']) ?? null,
                    'year_level' => $row['year_level'] ?? 1,
                ]);

                if($student->email) {
                    User::firstOrCreate([
                        'username' => $student->email,
                        'role' => Role::Student,
                        'password' => $password,
                    ]);
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
        $course = Course::where('name', $courseName)->first();
        return $course ? $course->id : 0;
    }
}
