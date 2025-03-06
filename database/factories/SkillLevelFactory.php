<?php

namespace Database\Factories;

use App\Models\Freelancer;
use App\Models\Skill;
use App\Models\SkillLevel;
use Illuminate\Database\Eloquent\Factories\Factory;

class SkillLevelFactory extends Factory
{
    protected $model = SkillLevel::class;

    public function definition()
    {
        return [
            'freelancer_id' => Freelancer::factory(),
            'skill_id' => Skill::factory(),
            'level' => $this->faker->numberBetween(1, 10),
        ];
    }
}

