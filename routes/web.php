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
use App\Http\Controllers\NstpStatusController;
use App\Http\Middleware\FirstLoginMiddleware;
use Illuminate\Support\Facades\Route;

Route::get('/', [AuthenticatedSessionController::class, 'create'])
    ->middleware('guest');

Route::middleware('auth')->group(function () {
    Route::get('/first-login', [ProfileController::class, 'firstLogin'])->name('profile.first-login');
    Route::post('/first-login', [AuthStudentController::class, 'firstLogin'])->name('student.first-login');
    Route::post('/update-student', [AuthStudentController::class, 'update'])->name('student.update');
    Route::post('/update-admin', [AdminController::class, 'update'])->name('admin.update');
    Route::put('/update-username', [ProfileController::class, 'updateUsername'])->name('username.update');

    Route::middleware(FirstLoginMiddleware::class)->group(function () {
        Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
        Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
        Route::get('/certificate', [CertificateController::class, 'index'])->name('certificate');
        Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
        Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

        Route::post('students/import-enrolled', [UploadStudentController::class, 'importEnrolled'])->name('students.import-enrolled');
        Route::post('students/import-graduates', [UploadStudentController::class, 'importGraduates'])->name('students.import-graduates');

        Route::post('students/update-status', [StudentController::class, 'updateStatus'])->name('students-update-status');

        Route::get('students/upload', [UploadStudentController::class, 'create'])->name('students.upload');
        Route::get('students/all-ids', [StudentController::class, 'getAllStudentIds'])->name('students.all-ids');
        Route::get('students/{student}/reset-password', [StudentController::class, 'resetPassword'])->name('students.reset-password');

        Route::resource('students', StudentController::class);
        Route::resource('courses', CourseController::class);

        Route::get('/nstp-status', [NstpStatusController::class, 'index'])->name('nstp.status');
        Route::post('/nstp1-failed', [NstpStatusController::class, 'markNstp1Failed'])->name('nstp1.failed');
        Route::post('/nstp2-failed', [NstpStatusController::class, 'markNstp2Failed'])->name('nstp2.failed');
        Route::post('/nstp1-submit', [NstpStatusController::class, 'submitNstp1'])->name('nstp1.submit');
        Route::post('/nstp2-submit', [NstpStatusController::class, 'submitNstp2'])->name('nstp2.submit');
        Route::post('/nstp1-reset', [NstpStatusController::class, 'resetNstp1Status'])->name('nstp1.reset');
        Route::post('/nstp2-reset', [NstpStatusController::class, 'resetNstp2Status'])->name('nstp2.reset');
        Route::get('/fix-nstp-status', [NstpStatusController::class, 'fixNstpStatus'])->name('nstp.fix');
        Route::get('/nstp1-failed-list', [NstpStatusController::class, 'listFailedNstp1'])->name('nstp1.failed.list');
        Route::get('/nstp2-failed-list', [NstpStatusController::class, 'listFailedNstp2'])->name('nstp2.failed.list');
        Route::post('/nstp1-reset-all', [NstpStatusController::class, 'resetAllNstp1'])->name('nstp1.reset.all');
        Route::post('/nstp2-reset-all', [NstpStatusController::class, 'resetAllNstp2'])->name('nstp2.reset.all');

        Route::post('download-certificates', DownloadCertificateController::class)->name('certificates.download');
    });
});

// Add an additional route with the same controller for certificate downloads
// This is a fallback in case the main route has path resolution issues
Route::post('/api/download-certificates', DownloadCertificateController::class)->name('api.certificates.download');

require __DIR__.'/auth.php';
