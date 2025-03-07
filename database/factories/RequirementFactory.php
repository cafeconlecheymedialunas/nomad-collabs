<?php

namespace Database\Factories;

use App\Models\Requirement;
use Illuminate\Database\Eloquent\Factories\Factory;

class RequirementFactory extends Factory
{
    protected $model = Requirement::class;

    public function definition()
    {
        return [
            'title' => $this->faker->sentence,
            'type' => $this->faker->randomElement(['select', 'text', 'file']),
            'service_id' => \App\Models\Service::factory(),
        ];
    }
}
