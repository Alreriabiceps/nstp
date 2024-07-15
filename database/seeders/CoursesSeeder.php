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
            ['code' => 'BSMT',      'name' => 'Bachelor of Science in Marine Transportation'],
            ['code' => 'BSME',      'name' => 'Bachelor of Science in Marine Engineering'],
            ['code' => 'BSTM',      'name' => 'Bachelor of Science in Tourism Management'],
            ['code' => 'BSC',       'name' => 'Bachelor of Science in Criminology'],
            ['code' => 'BTVTED',    'name' => 'Bachelor of Technical-Vocational Teacher Education'],
            ['code' => 'BSIS',      'name' => 'Bachelor of Science in Information Systems'],
            ['code' => 'BECE',      'name' => 'Bachelor of Early Childhood Education'],
            ['code' => 'BSE',       'name' => 'Bachelor of Science in Entrepreneurship'],
            ['code' => 'BSA',       'name' => 'Bachelor of Science in Management Accounting'],
        ];

        foreach ($courses as $course) {
            Course::create($course);
        }
    }
}
