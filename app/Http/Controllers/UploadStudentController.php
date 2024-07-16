<?php

namespace App\Http\Controllers;

use App\Http\Requests\ImportEnrolledRequest;
use App\Http\Requests\ImportGraduatesRequest;
use App\Imports\GraduatesImport;
use App\Imports\StudentsImport;
use Inertia\Inertia;
use Maatwebsite\Excel\Facades\Excel;


class UploadStudentController extends Controller
{
    public function create()
    {
        return Inertia::render('Students/Upload');
    }

    public function importEnrolled(ImportEnrolledRequest $request)
    {
        try {
            Excel::import(new StudentsImport, $request->file('enrolled_file'));

            return redirect()->back()->with('success', 'Data imported successfully.');
        } catch (\Exception $e) {
            return redirect()->back()->with('error', 'Failed to import data: ' . $e->getMessage());
        }
    }

    public function importGraduates(ImportGraduatesRequest $request)
    {
        try {
            Excel::import(new GraduatesImport, $request->file('graduates_file'));

            return redirect()->back()->with('success', 'Data imported successfully.');
        } catch (\Exception $e) {
            return redirect()->back()->with('error', 'Failed to import data: ' . $e->getMessage());
        }
    }
}
