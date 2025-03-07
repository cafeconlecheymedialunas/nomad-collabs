<?php

namespace Database\Factories;

use App\Models\Portfolio;
use Illuminate\Database\Eloquent\Factories\Factory;

class PortfolioFactory extends Factory
{
    protected $model = Portfolio::class;

    public function definition()
    {
        return [
            'freelancer_id' => \App\Models\Freelancer::factory(),
            'title' => $this->faker->sentence,
            'start' => $this->faker->date,
            'end' => $this->faker->date,
            'company' => $this->faker->company,
            'country' => $this->faker->country,
            'description' => $this->faker->paragraph,
            'current' => $this->faker->boolean,
        ];
    }
}


