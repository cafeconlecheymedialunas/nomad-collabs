<?php

namespace Database\Factories;

use App\Models\Freelancer;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\JobExperience>
 */
class JobExperienceFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'freelancer_id' => Freelancer::factory(),
            'title' => $this->faker->word,
            'type_of_job' => $this->faker->word,
            'company_type' => $this->faker->word,
            'company_name' => $this->faker->company,
            'country' => $this->faker->country,
            'start' => $this->faker->date,
            'end' => $this->faker->date,
            'description' => $this->faker->paragraph,
            'current' => $this->faker->boolean,
        ];
    }
}
