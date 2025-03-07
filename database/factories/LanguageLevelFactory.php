<?php
namespace Database\Factories;

use App\Models\LanguageLevel;
use Illuminate\Database\Eloquent\Factories\Factory;

class LanguageLevelFactory extends Factory
{
    protected $model = LanguageLevel::class;

    public function definition()
    {
        return [
            'language' => $this->faker->word,
            'level' => $this->faker->randomElement(['Beginner', 'Intermediate', 'Advanced']),
            'can_work' => $this->faker->boolean,
            'language_id' => \App\Models\Language::factory(),
            'user_id' => \App\Models\User::factory(),
        ];
    }
}

