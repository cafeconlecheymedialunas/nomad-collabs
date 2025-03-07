<?php

namespace Database\Factories;

use App\Models\Billing;
use Illuminate\Database\Eloquent\Factories\Factory;

class BillingFactory extends Factory
{
    protected $model = Billing::class;

    public function definition()
    {
        return [
            'date' => $this->faker->dateTime,
            'total' => $this->faker->numberBetween(100, 10000),
            'invoice_url' => $this->faker->url,
            'currency' => $this->faker->currencyCode,
            'payment_method_id' => \App\Models\PaymentMethod::factory(),
            'billable_id' => $this->faker->numberBetween(1, 100),
            'billable_type' => $this->faker->randomElement(['App\Models\Order', 'App\Models\CreditsPurchase']),
        ];
    }
}