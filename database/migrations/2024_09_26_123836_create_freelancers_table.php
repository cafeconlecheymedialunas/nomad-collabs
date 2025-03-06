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
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->string('first_name'); // Nombre
            $table->string('last_name'); // Apellido
            $table->string('state')->nullable(); // Estado
            $table->string('city')->nullable(); // Ciudad
            $table->string('post_code')->nullable(); // Código postal
            $table->string('address')->nullable(); // Dirección
            $table->string('nick_name')->unique(); // Nombre de usuario (único)
            $table->text('description')->nullable(); // Descripción
            $table->string('display_name'); // Nombre para mostrar
            $table->string('country_origin'); // País de origen
            $table->string('country_residence'); // País de residencia
            $table->string('video')->nullable(); // Enlace a video (opcional)
            $table->string('cover')->nullable(); // Imagen de portada (opcional)
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
