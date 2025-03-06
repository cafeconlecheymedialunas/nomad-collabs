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
        Schema::create('pricing_plan_features', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('plan_id'); // Relación con el plan
            $table->unsignedBigInteger('feature_id')->nullable(); // Relación con características predeterminadas
            $table->string('name'); // Nombre de la característica personalizada
            $table->text('description')->nullable(); // Descripción de la característica personalizada
            $table->string('value'); // Valor de la característica (ej. "3 días", "2 revisiones")
            $table->timestamps();

            // Relaciones con las otras tablas
            $table->foreign('plan_id')->references('id')->on('plans')->onDelete('cascade');
            $table->foreign('feature_id')->references('id')->on('default_pricing_plan_features')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pricing_plan_features');
    }
};
