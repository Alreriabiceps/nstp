<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class UpdateAdminRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'image' => ['required', 'image', 'mimes:jpeg,png,jpg', 'max:2048'],
            'current_password' => ['required', 'current_password'],
            'password' => ['required', 'confirmed', Password::min(8)],
            'first_name' => ['required', 'string', ],
            'last_name' => ['required', 'string'],
            'MI' => ['required', 'string'],
        ];
    }

    public function messages()
    {
        return [
            'image.required' => 'Image is required',
            'image.image' => 'Image must be an image',
            'image.mimes' => 'Image must be a jpeg, png, or jpg file',
            'image.max' => 'Image must not exceed 2MB',
            'current_password.required' => 'Current password is required',
            'password.required' => 'Password is required',
            'password.confirmed' => 'Passwords do not match',
            'first_name.required' => 'First name is required',
            'last_name.required' => 'Last name is required',
            'MI.required' => 'Middle Initial is required',
        ];
    }
}
