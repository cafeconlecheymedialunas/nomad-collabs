<?php
namespace Database\Factories;

use App\Models\Freelancer;
use Illuminate\Database\Eloquent\Factories\Factory;

class FreelancerFactory extends Factory
{
    protected $model = Freelancer::class;

    public function definition()
    {
        return [
            'user_id' => \App\Models\User::factory(),
            'first_name' => $this->faker->firstName,
            'last_name' => $this->faker->lastName,
            'state' => $this->faker->state,
            'city' => $this->faker->city,
            'post_code' => $this->faker->postcode,
            'address' => $this->faker->address,
            'nick_name' => $this->faker->unique()->userName,
            'description' => $this->faker->paragraph,
            'display_name' => $this->faker->name,
            'country_origin' => $this->faker->country,
            'country_residence' => $this->faker->country,
            'cover' => $this->faker->imageUrl(),
            'account_active' => $this->faker->boolean,
            'video' => $this->faker->url,
        ];
    }
}
