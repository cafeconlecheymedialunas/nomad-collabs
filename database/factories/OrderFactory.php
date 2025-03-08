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
            'proposal_id' => \App\Models\Proposal::factory(),
            'sku' => $this->faker->unique()->bothify(str_repeat('?', 20)),
        ];

       
    }

}
