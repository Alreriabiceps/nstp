<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ImportGraduatesRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'graduates_file' => 'required|mimes:xls,xlsx|max:10240',
        ];
    }

    public function messages(): array
    {
        return [
            'graduates_file.required' => 'Please select a file to upload.',
            'graduates_file.mimes' => 'The file must be an Excel file in .xls or .xlsx format.',
            'graduates_file.max' => 'The file must not exceed 10MB.',
        ];
    }
}
