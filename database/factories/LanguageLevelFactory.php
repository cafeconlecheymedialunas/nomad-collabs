<?php

namespace Database\Factories;

use App\Models\Language;
use App\Models\LanguageLevel;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class LanguageLevelFactory extends Factory
{
    protected $model = LanguageLevel::class;

    public function definition()
    {
        return [
            'language' => $this->faker->word,
            'level' => $this->faker->randomElement(['beginner', 'intermediate', 'advanced', 'fluent']),
            'can_work' => $this->faker->boolean,
            'language_id' => Language::factory(),
            'user_id' => User::factory(),
        ];
    }
}

