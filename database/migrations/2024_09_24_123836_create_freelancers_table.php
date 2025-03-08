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
        Schema::create('freelancers', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->string('first_name');
            $table->string('last_name'); 
            $table->string('state')->nullable(); 
            $table->string('city')->nullable(); 
            $table->string('post_code')->nullable(); 
            $table->string('address')->nullable(); 
            $table->string('nick_name')->unique()->nullable(); 
            $table->text('description')->nullable(); 
            $table->string('display_name')->nullable(); 
            $table->string('country_origin')->nullable();
            $table->string('country_residence')->nullable(); 
            $table->string('cover')->nullable(); 
            $table->boolean('account_active')->default(true)->nullable();
            $table->string('video')->nullable(); // Enlace a video (opcional)
        
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('freelancers');
    }
};
