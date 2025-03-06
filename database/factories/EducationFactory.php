<?php

namespace Database\Factories;

use App\Models\Freelancer;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Education>
 */
class EducationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $init_at = $this->faker->dateTimeBetween('-10 years', '-2 years');
        $finish_at = $this->faker->dateTimeBetween($init_at, 'now');
        $finished = $this->faker->boolean(80); // 80% de probabilidad de que esté terminado

        return [
            'freelancer_id' => Freelancer::factory(), // Relación con Freelancer
            'init_at' => $init_at,
            'finish_at' => $finished ? $finish_at : null, // Si no está terminado, fecha de finalización es null
            'type' => $this->faker->randomElement(['Diploma', 'Licenciatura', 'Maestría', 'Doctorado', 'Certificación']),
            'institution' => $this->faker->company,
            'title' => $this->faker->jobTitle,
            'description' => $this->faker->sentence(10),
            'finished' => $finished,
        ];
    }
}
