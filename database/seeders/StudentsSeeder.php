<?php

namespace Database\Seeders;

use App\Models\Student;
use App\Models\User;
use App\Role;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class StudentsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $students = Student::factory()->count(10)->create();

        foreach($students as $student) {

            $password = 12345;

            $user = User::create([
                'username' => $student->email,
                'password' => Hash::make($password),
                'role' => Role::Student,
            ]);

            $student->update([
                'user_id' => $user->id
            ]);
        }
    }
}
