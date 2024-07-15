<?php

namespace App\Http\Controllers;

use App\Http\Requests\ImportBatchStudentRequest;
use App\Imports\StudentsImport;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Maatwebsite\Excel\Facades\Excel;


class UploadStudentController extends Controller
{
    public function create()
    {
        return Inertia::render('Students/Upload');
    }

    public function import(ImportBatchStudentRequest $request)
    {
        try {
            Excel::import(new StudentsImport, $request->file('batch_student_file'));

            return redirect()->back()->with('success', 'Data imported successfully.');
        } catch (\Exception $e) {
            return redirect()->back()->with('error', 'Failed to import data: ' . $e->getMessage());
        }
    }
}
