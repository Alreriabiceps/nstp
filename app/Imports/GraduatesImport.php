<?php

namespace App\Imports;

use App\Imports\NstpGraduatesSheetImport;
use Maatwebsite\Excel\Concerns\WithMultipleSheets;

class GraduatesImport implements WithMultipleSheets
{
    public function sheets(): array
    {
        return [
            'NSTP Graduates' => new NstpGraduatesSheetImport(),
        ];
    }
}
