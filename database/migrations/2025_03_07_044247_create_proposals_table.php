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
        Schema::create('proposals', function (Blueprint $table) {
            $table->id();
            $table->foreignId('project_id')->nullable()->constrained('projects')->onDelete('cascade');
            $table->foreignId('freelancer_id')->constrained('freelancers')->onDelete('cascade');
            $table->foreignId('buyer_id')->constrained('buyers')->onDelete('cascade'); 
            $table->foreignId('service_id')->nullable()->constrained('services')->onDelete('cascade'); 
            $table->foreignId('parent_proposal_id')->nullable()->constrained('proposals')->onDelete('cascade'); // Referencia a la propuesta 
            $table->enum("proposal_type",["standard","custom_order"]);
            $table->enum("execution_type",["fixed","milestones"])->default("fixed");
        
        
            $table->text("description");
            $table->text('project_overview')->nullable();
            $table->text('revision_details')->nullable(); // Detalles de revisiones
            $table->text('communication_plan')->nullable();
            $table->string('status_update_frequency')->nullable();
            $table->string('references')->nullable();

            $table->text("deliverables")->nullable(); 
            $table->text('technology_stack')->nullable();
            $table->text('project_goals')->nullable(); 
            
            
            $table->integer("revisions");
            $table->decimal("cost", 10, 2);
            $table->integer("duration");
            $table->timestamp("contract_start_date")->nullable(); // Fecha de inicio del contrato
            $table->timestamp("contract_end_date")->nullable();
         


            $table->enum('payment_method', ['fixed', 'milestone_based'])->default('fixed');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('proposals');
    }
};
