<?php

namespace App\Imports;

use App\Imports\NstpEnrollmentSheetImport;
use Illuminate\Contracts\Queue\ShouldQueue;
use Maatwebsite\Excel\Concerns\WithChunkReading;
use Maatwebsite\Excel\Concerns\WithMultipleSheets;

class StudentsImport implements WithMultipleSheets, WithChunkReading, ShouldQueue
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
