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
        Schema::create('buyers', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->string('first_name');
            $table->string('last_name'); 
            $table->string('state')->nullable(); 
            $table->string('city')->nullable(); 
            $table->string('post_code')->nullable(); 
            $table->string('address')->nullable(); 
            $table->string('nick_name')->unique(); 
            $table->text('description')->nullable(); 
            $table->string('display_name'); 
            $table->string('country_origin');
            $table->string('country_residence'); 
            $table->string('cover')->nullable(); 
            $table->string("company_name")->nullable();
            $table->string('company_state')->nullable(); 
            $table->string('company_city')->nullable(); 
            $table->string('company_post_code')->nullable(); 
            $table->string('company_address')->nullable(); 
            $table->string('company_country');
            $table->enum("buyer_type",["company","individual"]);
            $table->boolean('account_active')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('buyers');
    }
};
