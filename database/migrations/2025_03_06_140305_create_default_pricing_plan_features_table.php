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
        Schema::create('default_pricing_plan_features', function (Blueprint $table) {
            $table->id();
            $table->string('name'); // Nombre de la característica
            $table->text('description')->nullable(); // Descripción
            $table->boolean('is_required')->default(true); // Si es obligatorio o no
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('default_pricing_plan_features');
    }
};
