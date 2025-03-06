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
        Schema::create('reviews', function (Blueprint $table) {
            $table->id();
            $table->foreignId('order_id')->constrained('orders')->onDelete('cascade'); 
            $table->foreignId('reviewer_id')->constrained('users')->onDelete('cascade'); 
            $table->dateTime("date");
            $table->integer('rating'); 
            $table->text('comment')->nullable();
            $table->timestamps();
        

            $table->unique(['order_id', 'reviewer_id']);
        });
        
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('chat_reviews');
    }
};
