<?php

namespace Database\Factories;

use App\Models\Education;
use App\Models\Freelancer;
use Illuminate\Database\Eloquent\Factories\Factory;

class EducationFactory extends Factory
{
    // Definir el modelo que el factory representa
    protected $model = Education::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'freelancer_id' => Freelancer::factory(), // Asocia el Freelancer con el Factory
            'type' => $this->faker->word, // Tipo de educación (por ejemplo, "Grado", "Máster")
            'institution' => $this->faker->company, // Institución educativa (nombre de universidad)
            'title' => $this->faker->sentence, // Título del grado
            'description' => $this->faker->paragraph, // Descripción de los estudios
            'finish' => $this->faker->boolean, // Si está finalizado o no
        ];
    }
}
