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
            'user_id' => User::factory(), // Asocia un usuario al freelancer
            'first_name' => $this->faker->firstName(),
            'last_name' => $this->faker->lastName(),
            'state' => $this->faker->state(),
            'city' => $this->faker->city(),
            'post_code' => $this->faker->postcode(),
            'address' => $this->faker->address(),
            'nick_name' => $this->faker->unique()->userName(),
            'description' => $this->faker->paragraph(),
            'display_name' => $this->faker->name(),
            'country_origin' => $this->faker->country(),
            'country_residence' => $this->faker->country(),
            'video' => $this->faker->optional()->url(),
            'cover' => $this->faker->optional()->imageUrl(),
        ];
    }
}
