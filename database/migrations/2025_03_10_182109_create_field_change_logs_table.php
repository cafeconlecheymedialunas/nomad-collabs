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
        Schema::create('field_change_logs', function (Blueprint $table) {
            $table->id();
            $table->morphs('changeable');  // Relación polimórfica: 'changeable_type' y 'changeable_id'
            $table->string('field_name'); // Nombre del campo que fue modificado
            $table->text('old_value')->nullable(); // Valor antiguo
            $table->text('new_value'); // Nuevo valor
            $table->foreignId('changed_by')->constrained('users')->onDelete('cascade'); // Usuario que hizo el cambio
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('field_change_logs');
    }
};
