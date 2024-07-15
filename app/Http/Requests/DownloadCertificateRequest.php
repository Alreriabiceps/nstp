<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DownloadCertificateRequest extends FormRequest
{

    public function rules(): array
    {
        return [
            'student_ids' => 'required|array',
            'certificate_date' => 'required|date',
        ];
    }
}
