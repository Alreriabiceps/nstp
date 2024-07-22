<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class FirstLoginRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'image' => ['required', 'image', 'mimes:jpeg,png,jpg', 'max:2048'],
            'student_id' => ['required', 'string', 'max:255', 'unique:students,student_id', "digits:11"],
            'section' => ['required', 'string', 'max:255'],
            'current_password' => ['required', 'current_password'],
            'password' => ['required', 'confirmed', Password::min(8)],
        ];
    }

    public function messages()
    {
        return [
            'image.required' => 'Image is required',
            'image.image' => 'Image must be an image',
            'image.mimes' => 'Image must be a jpeg, png, or jpg file',
            'image.max' => 'Image must not exceed 2MB',
            'student_id.required' => 'Student ID is required',
            'student_id.max' => 'Student ID must not exceed 255 characters',
            'student_id.unique' => 'Student ID is already taken',
            'section.required' => 'Section is required',
            'section.max' => 'Section must not exceed 255 characters',
            'current_password.required' => 'Current password is required',
            'password.required' => 'Password is required',
            'password.confirmed' => 'Passwords do not match',
        ];
    }
}
