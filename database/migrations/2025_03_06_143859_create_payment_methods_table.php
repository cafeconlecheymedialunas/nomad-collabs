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
        Schema::create('payment_methods', function (Blueprint $table) {
            $table->id();
         

            $table->string("card_number");
            $table->string("card_expiration_date");
            $table->string("card_security_code");
            $table->string("card_calholders_name");
            $table->string("paypal_email");
            $table->string("mercado_pago_email");
            $table->string("stripe_email");

            $table->foreignId('user_id')->references('id')->on('users')->onDelete("cascade"); 

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('payment_methods');
    }
};
