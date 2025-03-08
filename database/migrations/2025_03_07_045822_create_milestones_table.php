<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMilestonesTable extends Migration
{
    public function up(): void
    {
        Schema::create('milestones', function (Blueprint $table) {
            $table->id();
            $table->foreignId('proposal_id')->constrained('proposals')->onDelete('cascade');
            $table->string('title');
            $table->text('description');
            $table->decimal('cost', 10, 2);  // Costo estimado del hito
            $table->integer('duration'); // Duración estimada en días o en horas
            $table->datetime("init_at")->nullable();
            $table->dateTime("finish_at")->nullable();
            $table->enum('status', ['pending', 'completed', 'in_progress'])->default('pending'); // Estado del hito
            $table->timestamps();
        });

    }

    public function down(): void
    {
        Schema::dropIfExists('milestones');
    }
}

