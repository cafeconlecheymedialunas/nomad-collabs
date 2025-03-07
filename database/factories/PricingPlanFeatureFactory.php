<?php

namespace Database\Factories;

use App\Models\PricingPlanFeature;
use Illuminate\Database\Eloquent\Factories\Factory;

class PricingPlanFeatureFactory extends Factory
{
    protected $model = PricingPlanFeature::class;

    public function definition()
    {
        return [
            'plan_id' => \App\Models\Plan::factory(),
            'feature_id' => \App\Models\DefaultPricingPlanFeature::factory(),
            'name' => $this->faker->word,
            'description' => $this->faker->paragraph,
            'value' => $this->faker->word,
        ];
    }
}