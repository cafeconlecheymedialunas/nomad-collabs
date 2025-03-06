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
        Schema::create('orders', function (Blueprint $table) {
            $table->id();

            $table->foreignId('freelancer_id')->constrained('users')->onDelete('cascade');
            
            $table->foreignId('buyer_id')->constrained('users')->onDelete('cascade');
            
            $table->foreignId('service_id')->constrained('services')->onDelete('cascade');
            
            $table->integer('total');
            $table->dateTime('date');
            $table->string('sku', 20)->unique();
            $table->timestamps();
        });
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
