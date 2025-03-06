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
        Schema::create('plans', function (Blueprint $table) {
            $table->id();
            $table->foreignId('service_id')->constrained()->onDelete('cascade'); // Relación con el servicio
            $table->enum('type', ['basic', 'standard', 'premium']); // Tipo de plan
            $table->string('name'); // Nombre del plan
            $table->text('description'); // Descripción del plan
            $table->decimal('price', 10, 2); // Precio del plan
            $table->timestamps();

            // Agregar restricción única para asegurarnos de que un servicio solo tenga un plan de cada tipo
            $table->unique(['service_id', 'type']); // Asegura que solo haya un plan de cada tipo por servicio
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('plans');
    }
};
