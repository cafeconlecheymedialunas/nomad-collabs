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
        Schema::create('change_requests_logs', function (Blueprint $table) {
            $table->id();
            $table->string('entity_type'); // 'proposal', 'milestone', 'task', 'contract'
            $table->foreignId('entity_id'); // ID de la entidad a la que se le hace el cambio
            $table->string('requested_field'); // El campo que se desea cambiar
            $table->text('requested_value'); // El valor que se solicita para el cambio
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('change_requests_logs');
    }
};
