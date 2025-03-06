<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Freelancer>
 */
class FreelancerFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => User::factory(),
            'first_name' => $this->faker->firstName,
            'last_name' => $this->faker->lastName,
            'birthday' => $this->faker->date(),
            'genre' => $this->faker->randomElement(['Femenino', 'Masculino', 'Otro']),
            'country_origin' => $this->faker->countryCode,
            'country_residence' => $this->faker->countryCode,
            'description' => $this->faker->paragraph,
            "account_active" => $this->faker->randomElement([true,false])
        ];
    }
}
