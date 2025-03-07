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
        Schema::create('projects', function (Blueprint $table) {

            $table->id();
            $table->string('title');
            $table->text('description');
            $table->enum('project_type', ['hourly', 'fixed_price', 'retainer', 'task_based', 'project_based', 'subscription', 'milestone_based', 'commission']);
            $table->string('project_duration');
            $table->json('languages_required');
            $table->enum('buyer_type', ['company', 'freelancer'])->default("freelancer");
            $table->string('location')->nullable();
            $table->timestamp('posted_at');
            $table->integer('views');
            $table->json('attachments')->nullable();
            $table->timestamp("estimated_delivery_date_start")->nullable();
            $table->timestamp("estimated_delivery_date_end")->nullable();
            $table->decimal("estimated_cost_lowest", 10, 2)->nullable();
            $table->decimal("estimated_cost_highest", 10, 2)->nullable();
            $table->enum('difficulty_level', ['easy', 'medium', 'hard'])->nullable();
            $table->foreignId('buyer_id')->constrained('buyers')->onDelete('cascade');
            $table->timestamps();
           
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
