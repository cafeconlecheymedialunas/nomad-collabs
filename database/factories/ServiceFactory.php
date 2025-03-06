<?php

// database/factories/ServiceFactory.php

namespace Database\Factories;

use App\Models\Service;
use App\Models\Category;
use App\Models\Skill;
use App\Models\Tag;
use App\Models\Freelancer;
use Illuminate\Database\Eloquent\Factories\Factory;

class ServiceFactory extends Factory
{
    protected $model = Service::class;

    public function definition()
    {
        return [
            'freelancer_id' => Freelancer::factory(),
            'category_id' => Category::factory(),
            'skill_id' => Skill::factory(),
            'tag_id' => Tag::factory(),
            
            'title' => $this->faker->words(3, true), 
            'description' => $this->faker->paragraph, 
            'active' => $this->faker->boolean, 
        ];
    }
}

