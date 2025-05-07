<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Log;

class DownloadCertificateRequest extends FormRequest
{
    public function authorize(): bool
    {
        // Always authorize since the route is already protected by auth middleware
        return true;
    }

    public function rules(): array
    {
        return [
            'student_ids' => 'required|array',
            'certificate_date' => 'required|date',
        ];
    }

    protected function prepareForValidation(): void 
    {
        // Log for debugging
        Log::info('Certificate download request received', [
            'path' => $this->path(),
            'url' => $this->url(),
            'fullUrl' => $this->fullUrl(),
            'student_ids' => $this->student_ids,
        ]);
    }
}
