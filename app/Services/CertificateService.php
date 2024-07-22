<?php

namespace App\Services;

use App\Models\Student;
use App\Models\User;
use Illuminate\Support\Carbon;
use setasign\Fpdi\Tcpdf\Fpdi;

class CertificateService
{
    public function generateCertificate(Student $student, $date =  null)
    {
        $studentName = $student->first_name. ' '. $student->middle_name. ' ' . $student->last_name .' '. $student->extension_name;

        $academicYear = "for two academic semester,  Academic year ". $student->enrollment_year;
        $user = User::where('id', 1)->first();
        $coordinatorName = Str::upper($user->first_name. ' '. $user->middle_name. ' ' . $user->last_name .' '. $user->extension_name);

        $date = Carbon::parse($date)->format('Y-m-d');
        $monthYear = Carbon::createFromFormat('Y-m-d', $date)->format('F Y');
        $day = Carbon::createFromFormat('Y-m-d', $date)->format('jS');
        $certificateDate = "Given on the ".$day. " of ".$monthYear;

        $templatePath = public_path('template-certificate/default.pdf');

        $outputPath = public_path('temporary-certificate/' . $student->id . '-nstp-certificate.pdf');

        $pdf = new Fpdi();

        $pdf->setSourceFile($templatePath);
        $tplIdx = $pdf->importPage(1);

        $size = $pdf->getTemplateSize($tplIdx);
        $pageWidth = $size['width'];
        $pageHeight = $size['height'];
        $orientation = 'L';

        $pdf->AddPage($orientation, [$pageWidth, $pageHeight]);
        $pdf->useTemplate($tplIdx, 0, 0, $pageWidth, $pageHeight, false);

        $pdf->SetTextColor(0, 0, 0);

        $academicYearWidth = $pdf->GetStringWidth($academicYear, '', 'Times', 12);
        $startAcademicYearName = (($pageWidth  - $academicYearWidth) / 2) + 9;

        $certificateDateWidth = $pdf->GetStringWidth($certificateDate, '', 'Times', 12);
        $startCertificateDate = (($pageWidth  - $certificateDateWidth) / 2) + 8;

        $studentNameWidth = $pdf->GetStringWidth($studentName, '', 'Times', 36);
        $startXName = (($pageWidth  - $studentNameWidth) / 2) - 24;

        $coordinatorNameWidth = $pdf->GetStringWidth($studentName, '', 'Times', 14);
        $startCoordinatorName = (($pageWidth  - $coordinatorNameWidth) / 2) - 24;

        $serialNumber = $student->nstp_serial_no;

        // Add student name
        $pdf->SetFont('Times', '', 36);
        $pdf->SetXY($startXName, 82);
        $pdf->Write(0, $studentName);

        // Add academic year
        $pdf->SetFont('Times', '', 12);
        $pdf->SetXY($startAcademicYearName, 125);
        $pdf->Write(0, $academicYear);

        // Add certificate date
        $pdf->SetFont('Times', '', 12);
        $pdf->SetXY($startCertificateDate, 138);
        $pdf->Write(0, $certificateDate);

        //Add serial number
        $pdf->SetFont('Times', '', 12);
        $pdf->SetXY(55, 189);
        $pdf->Write(0, $serialNumber);

        // Save the filled PDF
        $pdf->Output($outputPath, 'F');

        return $outputPath;
    }
}
