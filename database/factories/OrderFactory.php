<?php

namespace Database\Factories;

use App\Models\Order;
use Illuminate\Database\Eloquent\Factories\Factory;

class OrderFactory extends Factory
{
    protected $model = Order::class;

    public function definition()
    {
        return [
            'freelancer_id' => \App\Models\User::factory(),
            'buyer_id' => \App\Models\User::factory(),
            'service_id' => \App\Models\Service::factory(),
            'total' => $this->faker->numberBetween(100, 10000),
            'date' => $this->faker->dateTime,
            'sku' => $this->faker->unique()->bothify(str_repeat('?', 20)),
        ];
    }
}
