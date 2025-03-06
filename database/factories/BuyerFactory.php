<?php

namespace Database\Factories;

use App\Models\Buyer;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class BuyerFactory extends Factory
{
    protected $model = Buyer::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'user_id' => User::factory(), // Crea un usuario aleatorio y asigna el id al buyer
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
            'company_name' => $this->faker->company,
            'company_state' => $this->faker->state,
            'company_city' => $this->faker->city,
            'company_post_code' => $this->faker->postcode,
            'company_address' => $this->faker->address,
            'company_country' => $this->faker->country,
            'buyer_type' => $this->faker->randomElement(['company', 'individual']),
            'account_active' => $this->faker->boolean,
        ];
    }
}
