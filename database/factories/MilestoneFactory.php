<?php

namespace Database\Factories;

use App\Models\Milestone;
use App\Models\Proposal;
use Illuminate\Database\Eloquent\Factories\Factory;

class MilestoneFactory extends Factory
{
    protected $model = Milestone::class;

    public function definition()
    {
        return [
            'proposal_id' => Proposal::factory(),
            'title' => $this->faker->sentence,
            'description' => $this->faker->paragraph,
            'cost' => $this->faker->randomFloat(2, 50, 1000), // Costo entre 50 y 1000
            'duration' => $this->faker->numberBetween(1, 30), // Duración entre 1 y 30 días
            'status' => $this->faker->randomElement(['pending', 'completed', 'in_progress']),
        ];
    }
}
