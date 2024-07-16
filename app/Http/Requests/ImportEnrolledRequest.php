<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ImportEnrolledRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'enrolled_file' => 'required|mimes:xls,xlsx|max:10240',
        ];
    }

    public function messages(): array
    {
        return [
            'enrolled_file.required' => 'Please select a file to upload.',
            'enrolled_file.mimes' => 'The file must be an Excel file in .xls or .xlsx format.',
            'enrolled_file.max' => 'The file must not exceed 10MB.',
        ];
    }
}
