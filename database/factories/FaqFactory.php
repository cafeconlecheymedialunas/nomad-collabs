<?php

namespace Database\Factories;

use App\Models\Faq;
use Illuminate\Database\Eloquent\Factories\Factory;

class FaqFactory extends Factory
{
    protected $model = Faq::class;

    public function definition()
    {
        return [
            'service_id' => \App\Models\Service::factory(),
            'answer' => $this->faker->sentence,
            'response' => $this->faker->paragraph,
        ];
    }
}
