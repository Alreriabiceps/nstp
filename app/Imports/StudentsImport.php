<?php

namespace App\Imports;

use App\Imports\NstpEnrollmentSheetImport;
use Maatwebsite\Excel\Concerns\WithChunkReading;
use Maatwebsite\Excel\Concerns\WithMultipleSheets;

class StudentsImport implements WithMultipleSheets, WithChunkReading
{
    public function sheets(): array
    {
        return [
            'NSTP Enrollment List' => new NstpEnrollmentSheetImport(),
        ];
    }

    public function chunkSize(): int
    {
        return 1000;
    }
}
