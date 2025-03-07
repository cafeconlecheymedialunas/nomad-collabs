<?php

namespace Database\Factories;

use App\Models\WalletWithdraw;
use Illuminate\Database\Eloquent\Factories\Factory;

class WalletWithdrawFactory extends Factory
{
    protected $model = WalletWithdraw::class;

    public function definition()
    {
        return [
            'amount' => $this->faker->randomFloat(2, 10, 1000),
            'date' => $this->faker->dateTime,
            'description' => $this->faker->sentence,
            'wallet_id' => \App\Models\Wallet::factory(),
        ];
    }
}
