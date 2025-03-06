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
        Schema::create('pricing_plan_extras', function (Blueprint $table) {
            $table->id();
      
            $table->string('name'); // Nombre del extra personalizado
            $table->string('description'); // Nombre del extra personalizado
            $table->integer('extra_delivery'); // Precio adicional del extra
            $table->integer('extra_cost'); // Precio adicional del extra
            $table->timestamps();

            // Relaciones con las otras tablas
            $table->foreignId('plan_id')->references('id')->on('plans')->onDelete('cascade');
            $table->foreignId('extra_id')->nullable()->references('id')->on('default_pricing_plan_extras')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('plan_extras');
    }
};
