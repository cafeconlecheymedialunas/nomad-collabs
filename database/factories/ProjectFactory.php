<?php

namespace Database\Factories;

use App\Models\Project;
use App\Models\Freelancer;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProjectFactory extends Factory
{
    protected $model = Project::class;

    public function definition()
    {
        return [
            'freelancer_id' => Freelancer::factory(), // Suponiendo que tienes un factory para Freelancer
            'title' => $this->faker->sentence,
            'start' => $this->faker->date(),
            'end' => $this->faker->date(),
            'company' => $this->faker->company,
            'country' => $this->faker->country,
            'description' => $this->faker->paragraph,
            'current' => $this->faker->boolean,
        ];
    }
}

