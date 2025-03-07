<?php

namespace Database\Factories;

use App\Models\Certification;
use Illuminate\Database\Eloquent\Factories\Factory;

class CertificationFactory extends Factory
{
    protected $model = Certification::class;

    public function definition()
    {
        return [
            'freelancer_id' => \App\Models\Freelancer::factory(),
            'type' => $this->faker->word,
            'institution' => $this->faker->company,
            'title' => $this->faker->sentence,
            'description' => $this->faker->paragraph,
            'file' => $this->faker->url,
        ];
    }
}
