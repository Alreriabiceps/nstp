<?php

use App\Http\Controllers\Auth\AdminController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\StudentController as AuthStudentController;
use App\Http\Controllers\CertificateController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DownloadCertificateController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\UploadStudentController;
use App\Http\Middleware\FirstLoginMiddleware;
use Illuminate\Support\Facades\Route;

Route::get('/', [AuthenticatedSessionController::class, 'create'])
    ->middleware('guest');

Route::middleware('auth')->group(function () {
    Route::get('/first-login', [ProfileController::class, 'firstLogin'])->name('profile.first-login');
    Route::post('/first-login', [AuthStudentController::class, 'firstLogin'])->name('student.first-login');
    Route::post('/update-student', [AuthStudentController::class, 'update'])->name('student.update');
    Route::post('/update-admin', [AdminController::class, 'update'])->name('admin.update');

    Route::middleware(FirstLoginMiddleware::class)->group(function () {
        Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
        Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
        Route::get('/certificate', [CertificateController::class, 'index'])->name('certificate');
        Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
        Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

        Route::post('students/import-enrolled', [UploadStudentController::class, 'importEnrolled'])->name('students.import-enrolled');
        Route::post('students/import-graduates', [UploadStudentController::class, 'importGraduates'])->name('students.import-graduates');

        Route::post('students-update-status', [StudentController::class, 'updateStatus'])->name('students-update-status');

        Route::get('students/upload', [UploadStudentController::class, 'create'])->name('students.upload');
        Route::get('students/{student}/reset-password', [StudentController::class, 'resetPassword'])->name('students.reset-password');

        Route::resource('students', StudentController::class);
        Route::resource('courses', CourseController::class);

        Route::post('download-certificates', DownloadCertificateController::class)->name('certificates.download');
    });
});

require __DIR__.'/auth.php';
