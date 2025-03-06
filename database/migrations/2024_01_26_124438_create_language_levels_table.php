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
        Schema::create('language_levels', function (Blueprint $table) {
            $table->id();

            $table->string("language");
            $table->string("level");
            $table->boolean("can_work");
            $table->foreignId('language_id')->references('id')->on('languages')->onDelete("cascade"); 
   
            $table->foreignId('user_id')->references('id')->on('users')->onDelete("cascade"); 
         
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('language_levels');
    }
};
