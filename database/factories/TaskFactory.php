<?php

namespace Database\Factories;

use App\Models\Task;
use App\Models\Project;
use Illuminate\Database\Eloquent\Factories\Factory;

class TaskFactory extends Factory
{
    protected $model = Task::class;

    public function definition()
    {
        return [
            'title' => $this->faker->sentence,  
            'description' => $this->faker->paragraph,  
            'estimated_delivery_date_start' => $this->faker->dateTimeThisYear(),
            'estimated_delivery_date_end' => $this->faker->dateTimeBetween('+1 week', '+3 months'), 
            'estimated_cost_lowest' => $this->faker->randomFloat(2, 100, 500),  
            'estimated_cost_highest' => $this->faker->randomFloat(2, 500, 1000),  
            'estimated_duration' => $this->faker->word,
            'project_id' => Project::factory(),
        ];
    }
}


