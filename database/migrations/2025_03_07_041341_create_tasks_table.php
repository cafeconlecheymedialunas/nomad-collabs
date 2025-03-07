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
        Schema::create('tasks', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('description')->nullable();
            $table->timestamp("estimated_delivery_date_start")->nullable();
            $table->timestamp("estimated_delivery_date_end")->nullable();
            $table->decimal("estimated_cost_lowest", 10, 2)->nullable();
            $table->decimal("estimated_cost_highest", 10, 2)->nullable();
            $table->string('estimated_duration')->nullable();
            $table->foreignId('project_id')->constrained('projects')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tasks');
    }
};
