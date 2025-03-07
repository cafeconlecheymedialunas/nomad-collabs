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
        Schema::create('portfolios', function (Blueprint $table) {
            $table->id();
            $table->foreignId('freelancer_id')->references('id')->on('freelancers'); 
            $table->string("title");
            $table->date("start")->nullable();
            $table->date("end")->nullable();
            $table->string("company")->nullable();
            $table->string("country")->nullable();
            $table->text("description")->nullable();
            $table->boolean("current")->default(false);
            $table->timestamps();
           
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('portfolios');
    }
};
