<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ImportBatchStudentRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'batch_student_file' => 'required|mimes:xls,xlsx|max:10240',
        ];
    }

    public function messages(): array
    {
        return [
            'batch_student_file.required' => 'Please select a file to upload.',
            'batch_student_file.mimes' => 'The file must be an Excel file in .xls or .xlsx format.',
            'batch_student_file.max' => 'The file must not exceed 10MB.',
        ];
    }
}
