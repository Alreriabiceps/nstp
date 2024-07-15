<?php

namespace Database\Seeders;

use App\Models\Student;
use App\Models\User;
use App\Role;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

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
                'username' => Str::upper($student->email),
                'password' => Hash::make($password),
                'role' => Role::Student,
            ]);

            $student->update([
                'user_id' => $user->id
            ]);
        }
    }
}
