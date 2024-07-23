<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateStatusRequest extends FormRequest
{

    public function rules(): array
    {
        return [
            'student_ids' => 'required|array',
            'first_sem_status' => 'required|string',
            'second_sem_status' => 'nullable|string',
        ];
    }

    public function messages(): array
    {
        return [
            'student_ids.required' => 'Please select at least one student.',
        ];
    }
}
