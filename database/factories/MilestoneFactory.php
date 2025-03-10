<?php

namespace Database\Factories;

use App\Models\Milestone;
use App\Models\Proposal;
use Database\Seeders\DefaultValues;
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
            'cost' => $this->faker->randomFloat(2, 100, 1000),
            'revisions' => $this->faker->numberBetween(1, 5),
            'type' => $this->faker->randomElement(DefaultValues::default("milestone_types")),
            'meeting' => $this->faker->boolean,
            'deliverable' => $this->faker->word,
            'estimation_optimistic' => $this->faker->numberBetween(1, 10),
            'estimation_more_probabbly' => $this->faker->numberBetween(1, 10),
            'estimation_pesimistic' => $this->faker->numberBetween(1, 10),
            'estimated_time' => $this->faker->numberBetween(1, 100),
            'init_at' => $this->faker->dateTime,
            'finish_at' => $this->faker->dateTime,
            'status' => $this->faker->randomElement(['pending', 'completed', 'in_progress']),
        ];

      
    }
}
