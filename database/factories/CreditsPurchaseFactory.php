<?php

namespace Database\Factories;
use App\Models\CreditsPurchase;
use Illuminate\Database\Eloquent\Factories\Factory;

class CreditsPurchaseFactory extends Factory
{
    protected $model = CreditsPurchase::class;

    public function definition()
    {
        return [
            'date' => $this->faker->dateTime,
            'amount_spent' => $this->faker->randomFloat(2, 10, 1000),
            'currency_received' => $this->faker->randomFloat(2, 10, 1000),
            'user_id' => \App\Models\User::factory(),
            'sku' => $this->faker->unique()->bothify(str_repeat('?', 20)),
        ];
    }
}
