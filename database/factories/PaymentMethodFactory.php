<?php

namespace Database\Factories;

use App\Models\PaymentMethod;
use Illuminate\Database\Eloquent\Factories\Factory;

class PaymentMethodFactory extends Factory
{
    protected $model = PaymentMethod::class;

    public function definition()
    {
        return [
            'card_number' => $this->faker->creditCardNumber,
            'card_expiration_date' => $this->faker->creditCardExpirationDate,
            'card_security_code' => $this->faker->randomNumber(3),
            'card_calholders_name' => $this->faker->name,
            'paypal_email' => $this->faker->email,
            'mercado_pago_email' => $this->faker->email,
            'stripe_email' => $this->faker->email,
            'user_id' => \App\Models\User::factory(),
        ];
    }
}
