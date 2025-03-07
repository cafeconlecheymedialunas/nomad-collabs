<?php

namespace Database\Factories;

use App\Models\PricingPlanExtra;
use Illuminate\Database\Eloquent\Factories\Factory;

class PricingPlanExtraFactory extends Factory
{
    protected $model = PricingPlanExtra::class;

    public function definition()
    {
        return [
            'plan_id' => \App\Models\Plan::factory(),
            'extra_id' => \App\Models\DefaultPricingPlanExtra::factory(),
            'name' => $this->faker->word,
            'description' => $this->faker->paragraph,
            'extra_delivery' => $this->faker->numberBetween(1, 10),
            'extra_cost' => $this->faker->numberBetween(1, 100),
        ];
    }
}