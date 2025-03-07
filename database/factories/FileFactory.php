<?php

namespace Database\Factories;

use App\Models\File;
use Illuminate\Database\Eloquent\Factories\Factory;

class FileFactory extends Factory
{
    protected $model = File::class;

    public function definition()
    {
        return [
            'path' => $this->faker->filePath(),
            'name' => $this->faker->word,
            'mime_type' => $this->faker->mimeType,
            'alt' => $this->faker->sentence,
        ];
    }
}

