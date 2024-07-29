<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class UpdateAdminRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'image' => ['nullable', 'image', 'mimes:jpeg,png,jpg', 'max:2048'],
            'first_name' => ['required', 'string', ],
            'last_name' => ['required', 'string'],
            'MI' => ['required', 'string'],
        ];
    }

    public function messages()
    {
        return [
            'image.image' => 'Image must be an image',
            'image.mimes' => 'Image must be a jpeg, png, or jpg file',
            'image.max' => 'Image must not exceed 2MB',
            'first_name.required' => 'First name is required',
            'last_name.required' => 'Last name is required',
            'MI.required' => 'Middle Initial is required',
        ];
    }
}
