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
            'proposal_id' => Proposal::factory(),  // Crea una propuesta aleatoria
            'title' => $this->faker->word(),
            'description' => $this->faker->text(),
            'cost' => $this->faker->randomFloat(2, 50, 500),  // Costo entre 50 y 500
            'duration' => $this->faker->numberBetween(1, 30),  // Duración entre 1 y 30 días
            'init_at' => $this->faker->dateTimeBetween('now', '+1 month'),
            'finish_at' => $this->faker->dateTimeBetween('+1 month', '+2 months'),
            'status' => $this->faker->randomElement(['pending', 'in_progress', 'completed']),  // Estado aleatorio
        ];
      
    }
}
