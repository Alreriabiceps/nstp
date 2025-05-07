<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('students', function (Blueprint $table) {
            $table->id();
            $table->string('student_id')->nullable();
            $table->string('first_name')->nullable();
            $table->string('middle_name')->nullable();
            $table->string('last_name')->nullable();
            $table->string('extension_name')->nullable();
            $table->string('image')->nullable();
            $table->date('birthdate')->nullable();
            $table->string('email')->nullable();
            $table->string('phone')->nullable();
            $table->string('sex')->nullable();

            $table->string('hei_name')->default("EXACT College of Asia");
            $table->string('hei_type')->default("Private");
            $table->integer('year_level')->default(1);
            $table->string('section')->nullable();

            $table->string('region')->nullable();
            $table->string('province')->nullable();
            $table->string('city')->nullable();
            $table->string('brgy')->nullable();

            $table->string('enrollment_status')->nullable();

            $table->string('first_sem_status')->default('pending');
            $table->string('second_sem_status')->default('pending');

            $table->string('enrollment_year')->nullable();
            $table->string('enrollment_type')->nullable();

            $table->string('nstp_serial_no')->nullable();
            $table->bigInteger('seq_no')->nullable();

            $table->foreignId('user_id')->nullable();
            $table->foreignId('course_id')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('students');
    }
};
