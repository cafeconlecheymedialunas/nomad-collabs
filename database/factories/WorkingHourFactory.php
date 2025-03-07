<?php

namespace Database\Factories;

use App\Models\WorkingHour;
use Illuminate\Database\Eloquent\Factories\Factory;

class WorkingHourFactory extends Factory
{
    protected $model = WorkingHour::class;

    public function definition()
    {
        return [
            'day_of_week' => $this->faker->dayOfWeek,
            'start_time' => $this->faker->time,
            'end_time' => $this->faker->time,
            'user_id' => \App\Models\User::factory(),
        ];
    }
}

