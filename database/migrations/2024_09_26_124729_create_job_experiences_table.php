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
        Schema::create('job_experiences', function (Blueprint $table) {
            $table->id();
            $table->foreignId('freelancer_id')->references('id')->on('freelancers');
            $table->string("title");

            $table->string("company_name");
            $table->string("country");
            $table->date("start");
            $table->date("end");
            $table->text("description");
            $table->boolean("current");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('job_experiences');
    }
};
