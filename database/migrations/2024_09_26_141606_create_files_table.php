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
        Schema::create('files', function (Blueprint $table) {
            $table->id();
            $table->string('path'); 
            $table->string('name'); 
            $table->string('mime_type'); 
            $table->string('alt')->nullable(); 
            $table->timestamps();
        });

        Schema::create('fileables', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('file_id');
            $table->morphs('fileable');
            $table->timestamps();
            $table->foreign('file_id')->references('id')->on('files')->onDelete('cascade');
        });
        
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('files');
    }
};
