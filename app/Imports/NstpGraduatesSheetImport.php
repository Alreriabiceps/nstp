<?php

namespace App\Imports;

use App\Models\Student;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Log;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithBatchInserts;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class NstpGraduatesSheetImport implements ToCollection, WithBatchInserts, WithHeadingRow
{
    public function collection(Collection $rows)
    {
        foreach ($rows as $row) {
            if( $row['seqno'] && $row['nstp_graduation_year']) {
                $student = Student::where('seq_no', $row['seqno'])->where('enrollment_year', $row['nstp_graduation_year'])->first();

                if ($student) {
                    $student->update([
                        'nstp_serial_no' => $row['nstp_serial_number'],
                    ]);
                }
            }
        }
    }

    public function headingRow(): int
    {
        return 2;
    }

    public function batchSize(): int
    {
        return config('app.max_batch_size') ?? 1000;
    }

}
