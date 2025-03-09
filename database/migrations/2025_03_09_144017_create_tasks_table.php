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
        Schema::create('tasks', function (Blueprint $table) {
            Schema::create('tasks', function (Blueprint $table) {
                $table->id();
                $table->foreignId('proposal_id')->constrained('proposals')->onDelete('cascade'); // Relación con la propuesta
                $table->foreignId('parent_id')->nullable()->constrained('tasks')->onDelete('cascade'); // Relación autorreferencial
                $table->string('title');
                $table->text('description')->nullable();
                $table->enum('status', ['pending', 'in_progress', 'completed'])->default('pending');
                $table->integer('estimation_optimistic')->nullable(); // Estimación optimista
                $table->integer('estimation_pessimistic')->nullable(); // Estimación pesimista
                $table->integer('estimation_most_probably')->nullable(); // Estimación más probable
                $table->integer('estimated_time')->nullable(); // Tiempo estimado (calculado o manual)
                $table->timestamp('start_date')->nullable(); // Fecha de inicio
                $table->timestamp('end_date')->nullable(); // Fecha de finalización
                $table->timestamps();
            });
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tasks');
    }
};
