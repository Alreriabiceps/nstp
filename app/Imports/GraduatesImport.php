<?php

namespace App\Imports;

use App\Imports\NstpGraduatesSheetImport;
use Illuminate\Contracts\Queue\ShouldQueue;
use Maatwebsite\Excel\Concerns\WithChunkReading;
use Maatwebsite\Excel\Concerns\WithMultipleSheets;

class GraduatesImport implements WithMultipleSheets, WithChunkReading, ShouldQueue
{
    public function sheets(): array
    {
        return [
            'NSTP Graduates' => new NstpGraduatesSheetImport(),
        ];
    }

    public function chunkSize(): int
    {
        return 1000;
    }
}
