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
            ['code' => 'BSMT',      'name' => 'BS Marine Transportation'],
            ['code' => 'BSME',      'name' => 'BS Marine Engineering'],
            ['code' => 'BSTM',      'name' => 'BS Tourism Management'],
            ['code' => 'BSC',       'name' => 'BS Criminology'],
            ['code' => 'BTVTED',    'name' => 'BTVTED'],
            ['code' => 'BSIS',      'name' => 'BS Information Systems'],
            ['code' => 'BECE',      'name' => 'BECED'],
            ['code' => 'BSE',       'name' => 'BS Entrepreneurship'],
            ['code' => 'BSA',       'name' => 'BS Management Accounting'],
        ];

        foreach ($courses as $course) {
            Course::create($course);
        }
    }
}
