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
        Schema::create('education', function (Blueprint $table) {
            $table->id();
            $table->foreignId('freelancer_id')->references('id')->on('freelancers'); 
            $table->date('init_at'); // Solo fecha
            $table->date('finish_at')->nullable(); // Fecha opcional
            $table->string("type");
            $table->string("institution");
            $table->string("title");
            $table->string("description")->nullable();
            $table->boolean("finished")->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('education');
    }
};
