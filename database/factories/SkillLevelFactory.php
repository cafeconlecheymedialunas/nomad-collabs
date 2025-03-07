<?php

namespace Database\Factories;

use App\Models\SkillLevel;
use Illuminate\Database\Eloquent\Factories\Factory;

class SkillLevelFactory extends Factory
{
    protected $model = SkillLevel::class;

    public function definition()
    {
        return [
            'freelancer_id' => \App\Models\Freelancer::factory(),
            'skill_id' => \App\Models\Skill::factory(),
            'level' => $this->faker->numberBetween(1, 10),
        ];
    }
}
