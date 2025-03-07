<?php

namespace Database\Factories;

// JobExperienceFactory.php
use App\Models\JobExperience;
use Illuminate\Database\Eloquent\Factories\Factory;

class JobExperienceFactory extends Factory
{
    protected $model = JobExperience::class;

    public function definition()
    {
        return [
            'freelancer_id' => \App\Models\Freelancer::factory(),
            'title' => $this->faker->jobTitle,
            'company' => $this->faker->company,
            'type' => $this->faker->randomElement(['Full-time', 'Part-time', 'Contract']),
            'location' => $this->faker->address,
            'init_at' => $this->faker->date,
            'finish_at' => $this->faker->date,
            'description' => $this->faker->paragraph,
            'current' => $this->faker->boolean,
        ];
    }
}
