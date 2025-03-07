<?php

namespace Database\Factories;

use App\Models\DefaultPricingPlanExtra;
use Illuminate\Database\Eloquent\Factories\Factory;

class DefaultPricingPlanExtraFactory extends Factory
{
    protected $model = DefaultPricingPlanExtra::class;

    public function definition()
    {
        return [
            'name' => $this->faker->word,
            'description' => $this->faker->paragraph,
            'is_required' => $this->faker->boolean,
        ];
    }
}
