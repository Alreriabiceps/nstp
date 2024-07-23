<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreCourseRequest extends FormRequest
{

    public function rules(): array
    {
        return [
            'name' => 'required|string',
            'code' => 'required|string',
        ];
    }
}
