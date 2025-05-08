<?php

namespace Database\Seeders;

use App\Models\Course;
use Illuminate\Database\Seeder;

class CoursesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $courses = [
            ['code' => 'BSMT',      'name' => 'Bachelor of Science Marine Transportation'],
            ['code' => 'BSME',      'name' => 'Bachelor of Science Marine Engineering'],
            ['code' => 'BSTM',      'name' => 'Bachelor of Science Tourism Management'],
            ['code' => 'BSC',       'name' => 'Bachelor of Science in Criminology'],
            ['code' => 'BTVTED',    'name' => 'Bachelor of Technical-Vocational Teachers Education'],
            ['code' => 'BSIS',      'name' => 'Bachelor of Science Information Systems'],
            ['code' => 'BECE',      'name' => 'Bachelor of Early Childhood Education'],
            ['code' => 'BSE',       'name' => 'Bachelor of Science Entrepreneurship'],
            ['code' => 'BSA',       'name' => 'Bachelor of Science in Management Accounting'],
            ['code' => 'BSN',       'name' => 'Bachelor of Science in Nursing'],
        ];

        foreach ($courses as $course) {
            Course::create($course);
        }
    }
}
