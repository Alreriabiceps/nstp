<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateStudentRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'student_id' => 'required|string',

            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'middle_name' => 'required|string',
            'extension_name' => 'nullable|string',

            'sex' => 'required|string',

            'email' => 'required|email',
            'phone' => 'required|string',

            'course_id' => 'required|integer',

            'region' => 'required|string|max:255',
            'province' => 'required|string|max:255',
            'city' => 'required|string|max:255',
            'brgy' => 'required|string|max:255',

            'enrollment_type' => 'required|string',
            'enrollment_year' => 'required|string',

            'nstp_serial_no' => 'required|string',
        ];
    }

    public function messages()
    {
        return [
            'student_id.required' => 'Student ID is required',
            'first_name.required' => 'First name is required',
            'first_name.max_digits' => 'First name must not exceed 32 characters',
            'last_name.required' => 'Last name is required',
            'last_name.max_digits' => 'Last name must not exceed 32 characters',
            'middle_name.required' => 'Middle name is required',
            'middle_name.max_digits' => 'Middle name must not exceed 24 characters',
            'extension_name.max_digits' => 'Extension name must not exceed 16 characters',
            'coures_id.required' => 'Course is required',
            'nstp_serial_no.required' => 'NSTP Serial No. is required',
            'enrollment_type.required' => 'NSTP type is required',
            'enrollment_year.required' => 'Graduation year is required',
            'email.required' => 'Email is required',
            'email.max_digits' => 'Email must not exceed 64 characters',
            'phone.required' => 'Phone is required',
            'phone.max_digits' => 'Phone must not exceed 11 characters',
            'region.required' => 'Region is required',
            'province.required' => 'Province is required',
            'city.required' => 'City is required',
            'brgy.required' => 'Barangay is required',
        ];
    }
}
