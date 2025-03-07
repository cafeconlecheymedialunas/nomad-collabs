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
            $table->foreignId('project_id')->constrained('projects')->onDelete('cascade');
            $table->foreignId('freelancer_id')->constrained('freelancers')->onDelete('cascade');
            $table->foreignId('service_id')->constrained('services')->onDelete('cascade'); 
            $table->text("description");
            $table->enum("proposal_type",["fixed","milestones"])->default("fixed");
            $table->integer("estimated_duration");
           
            $table->decimal("estimated_cost", 10, 2);
            $table->enum("revisions",[1,2,3,4,5,6,7,8,9,10]);
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
