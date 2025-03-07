<?php

namespace Database\Factories;

use App\Models\Wallet;
use Illuminate\Database\Eloquent\Factories\Factory;

class WalletFactory extends Factory
{
    protected $model = Wallet::class;

    public function definition()
    {
        return [
            'balance' => $this->faker->numberBetween(0, 10000),
            'user_id' => \App\Models\User::factory(),
        ];
    }
}