<?php

// database/factories/ServiceFactory.php

namespace Database\Factories;

use App\Models\Service;
use Illuminate\Database\Eloquent\Factories\Factory;

class ServiceFactory extends Factory
{
    protected $model = Service::class;

    public function definition()
    {
        return [
            'freelancer_id' => \App\Models\Freelancer::factory(),
            'title' => $this->faker->sentence,
            'description' => $this->faker->paragraph,
            'images' => json_encode([$this->faker->imageUrl(), $this->faker->imageUrl()]),
            'video' => $this->faker->url,
            'documents' => json_encode([$this->faker->url, $this->faker->url]),
            'active' => $this->faker->boolean,
        ];
    }
}


