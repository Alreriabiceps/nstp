<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;

    protected $fillable = [
        'student_id',
        'first_name',
        'last_name',
        'middle_name',
        'extension_name',

        'sex',
        'birthdate',
        'email',

        'section',

        'user_id',
        'course_id',
        'year_level',

        'phone',

        'region',
        'province',
        'city',
        'brgy',

        'hei_name',
        'hei_type',

        'enrollment_status',
        'enrollment_type',
        'enrollment_year',

        'nstp_serial_no',

        'first_sem_status',
        'second_sem_status',
        'seq_no',
        'section',
        'image',
        'certificate_printed_at',
        'certificate_printed_by',
    ];

    // Define the acceptable status values
    const STATUS_FAILED = 0;   // Use integer 0 instead of string 'failed'
    const STATUS_PASSED = 1;   // Use integer 1 instead of string 'passed'
    const STATUS_PENDING = 2;  // Use integer 2 instead of string 'pending'

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'birthdate' => 'date',
        'certificate_printed_at' => 'datetime',
        'first_sem_status' => 'integer',
        'second_sem_status' => 'integer',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function course()
    {
        return $this->belongsTo(Course::class);
    }

    public function getFullNameAttribute()
    {
        return "{$this->last_name}, {$this->first_name} {$this->extension_name} {$this->middle_name}";
    }

    public function canReceiveCertificate()
    {
        return $this->first_sem_status === self::STATUS_PASSED && $this->second_sem_status === self::STATUS_PASSED;
    }

    public function isNstp1Pending()
    {
        return $this->first_sem_status === self::STATUS_PENDING;
    }

    public function isNstp2Pending()
    {
        return $this->second_sem_status === self::STATUS_PENDING;
    }

    public function hasNstp1Failed()
    {
        return $this->first_sem_status === self::STATUS_FAILED;
    }

    public function hasNstp2Failed()
    {
        return $this->second_sem_status === self::STATUS_FAILED;
    }
}
