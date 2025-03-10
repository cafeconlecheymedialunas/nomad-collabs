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
        Schema::create('change_requests', function (Blueprint $table) {
            $table->id();
            $table->string("title");
            $table->text('description'); // Motivo del cambio solicitado
            $table->enum('status', ['pending', 'approved', 'rejected'])->default('pending'); // Estado de la solicitud
            $table->foreignId('requested_by')->constrained('users')->onDelete('cascade'); // Quien solicita el cambio
            $table->foreignId('receibed_by')->nullable()->constrained('users')->onDelete('set null'); // Quien aprueba el cambio
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('change_requests');
    }
};
