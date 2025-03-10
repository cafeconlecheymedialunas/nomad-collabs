<?php

use Database\Seeders\DefaultValues;
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
            $table->integer("revisions");
            $table->enum("type",DefaultValues::default("milestone_types") )->default("Progress check");
            $table->boolean("meeting");
            $table->string('deliverable')->nullable();
        
            $table->integer("estimation_optimistic");
            $table->integer("estimation_more_probabbly");
            $table->integer("estimation_pesimistic");
            $table->integer('estimated_time')->nullable();
      
            
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

