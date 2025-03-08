<?php

namespace Database\Factories;

use App\Models\Payment;
use Illuminate\Database\Eloquent\Factories\Factory;

class PaymentFactory extends Factory
{
    protected $model = Payment::class;

    public function definition()
    {
        return [
            'date' => $this->faker->dateTime,
            'total' => $this->faker->numberBetween(100, 10000),
            'invoice_url' => $this->faker->url,
            'currency' => $this->faker->currencyCode,
            'payment_method_id' => \App\Models\PaymentMethod::factory(),
            'order_id' => \App\Models\Order::factory(),
            'user_id' => \App\Models\User::factory(),
        ];
    }
}