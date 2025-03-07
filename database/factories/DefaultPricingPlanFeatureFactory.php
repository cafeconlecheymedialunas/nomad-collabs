<?php

namespace Database\Factories;

use App\Models\DefaultPricingPlanFeature;
use Illuminate\Database\Eloquent\Factories\Factory;

class DefaultPricingPlanFeatureFactory extends Factory
{
    protected $model = DefaultPricingPlanFeature::class;

    public function definition()
    {
        return [
            'name' => $this->faker->word,
            'description' => $this->faker->paragraph,
            'is_required' => $this->faker->boolean,
        ];
    }
}
