<?php
// database/factories/CategoryFactory.php

namespace Database\Factories;

use App\Models\Category;
use App\Models\Service;
use Illuminate\Database\Eloquent\Factories\Factory;

class CategoryFactory extends Factory
{
    protected $model = Category::class;

    public function definition()
    {
        return [
            'title' => $this->faker->word,
            'description' => $this->faker->text,
            'slug' => $this->faker->slug,
            'image' => $this->faker->imageUrl(),
            'service_id' => Service::factory(), // This assumes you have a Service factory
        ];
    }
}

