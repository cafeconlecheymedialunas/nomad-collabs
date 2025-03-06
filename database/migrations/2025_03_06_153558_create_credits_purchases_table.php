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
        Schema::create('credits_purchases', function (Blueprint $table) {
            $table->id();
            $table->dateTime('date');
            $table->decimal('amount_spent', 10, 2); // Dinero real gastado (por ejemplo, en USD, EUR, etc.)
            $table->decimal('currency_received', 10, 2); // Monedas recibidas
            // Relación con la tabla de usuarios
            $table->foreignId('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('credits_purchases');
    }
};
