<?php

namespace Database\Factories;

use App\Models\Milestone;
use App\Models\Task;
use App\Models\Project;
use App\Models\Proposal;
use Illuminate\Database\Eloquent\Factories\Factory;

class TaskFactory extends Factory
{
    protected $model = Task::class;

    public function definition()
    {
        return [
            'proposal_id' => $this->faker->randomElement([Proposal::factory()->create()->id, null]),
            'milestone_id' => $this->faker->randomElement([Milestone::factory()->create()->id, null]),
            'title' => $this->faker->sentence,
            'description' => $this->faker->paragraph,
            'status' => $this->faker->randomElement(['pending', 'in_progress', 'completed']),
            'estimation_optimistic' => $this->faker->numberBetween(1, 10),
            'estimation_pessimistic' => $this->faker->numberBetween(1, 10),
            'estimation_most_probably' => $this->faker->numberBetween(1, 10),
            'estimated_time' => $this->faker->numberBetween(1, 100),
            'start_date' => $this->faker->dateTime,
            'end_date' => $this->faker->dateTime,
        ];
    }
}


