<?php

namespace Database\Factories;

use App\Models\Project;
use App\Models\Buyer;
use App\Models\Language;
use App\Models\Skill;
use App\Models\Task;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProjectFactory extends Factory
{
    protected $model = Project::class;

    public function definition()
    {
        return [
            'title' => $this->faker->sentence,
            'description' => $this->faker->paragraph,
            'project_type' => $this->faker->randomElement(['hourly', 'fixed_price', 'retainer', 'task_based', 'project_based', 'subscription', 'milestone_based', 'commission']),
            'project_duration' => $this->faker->word,  // Puedes ajustar según sea necesario
            'languages_required' => Language::all()->random(rand(1, 5))->pluck('title')->toArray(),  // Se seleccionan entre 1 y 5 idiomas aleatorios
            'buyer_type' => $this->faker->randomElement(['company', 'freelancer']),
            'location' => $this->faker->city,
            'posted_at' => $this->faker->dateTimeThisDecade,
            'views' => $this->faker->numberBetween(1, 1000),
            'attachments' => json_encode(['file1.pdf', 'file2.pdf']),  // Ejemplo de archivo adjunto
            'estimated_delivery_date_start' => $this->faker->dateTimeThisYear,
            'estimated_delivery_date_end' => $this->faker->dateTimeBetween('+1 month', '+3 months'),
            'estimated_cost_lowest' => $this->faker->randomFloat(2, 100, 500),  // Genera un número decimal
            'estimated_cost_highest' => $this->faker->randomFloat(2, 500, 1000),
            'difficulty_level' => $this->faker->randomElement(['easy', 'medium', 'hard']),
            'buyer_id' => Buyer::factory(),  // Relación con Buyer
        ];
    }
}
