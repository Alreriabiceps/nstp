<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Student>
 */
class StudentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'first_name' => $this->faker->firstName,
            'last_name' => $this->faker->lastName,
            'middle_name' => $this->faker->randomElement(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']),
            'extension_name' => $this->faker->randomElement(['Jr', '']),
            'course_id' => $this->faker->numberBetween(1, 4),
            'sex' => $this->faker->randomElement(['M', 'F']),
            'birthdate' => $this->faker->date(),
            'email' => $this->faker->unique()->safeEmail,
            'phone' => $this->faker->phoneNumber,
            'hei_name' => 'University of the Philippines',
            'hei_type' => $this->faker->randomElement(['Public', 'Private']),
            'region' => $this->faker->state,
            'province' => $this->faker->state,
            'city' => $this->faker->city,
            'brgy' => $this->faker->streetName,
            'enrollment_status' => $this->faker->randomElement(['Enrolled', 'Dropped', 'Graduated']),
            'enrollment_year' => $this->generateEnrollmentYear(),
            'enrollment_type' => $this->faker->randomElement(['CWTS', 'ROTC', 'LTS']),
            'nstp_serial_no' => "C-03-56717-23",
        ];
    }

    public function generateEnrollmentYear()
    {
        $startYear = 2023;
        $currentYear = date('Y');
        $graduationYears = [];
        for ($year = $startYear; $year <= $currentYear; $year++) {
            $graduationYears[] = $year.'/'.($year + 1);
        }

        return $this->faker->randomElement($graduationYears);
    }
}
