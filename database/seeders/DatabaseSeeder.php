<?php

namespace Database\Seeders;

use App\Models\Education;
use App\Models\Freelancer;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Crear el usuario con los datos específicos
        $user = User::factory()->create([
            'name' => 'Mauro',
            'email' => 'maurodeveloper86@gmail.com',
            'password' => bcrypt('arselocura1234')
        ]);

        // Crear el Freelancer asociado al usuario específico
        $freelancer = Freelancer::factory()->create([
            'user_id' => $user->id,
        ]);

        // Crear la Educación asociada al Freelancer específico
        Education::factory(6)->create([
            'freelancer_id' => $freelancer->id,
        ]);

        // Crear 10 usuarios aleatorios
        User::factory(10)->create()->each(function ($user) {
            // Crear Freelancer asociado al User
            $freelancer = Freelancer::factory()->create([
                'user_id' => $user->id,
            ]);

            // Crear Educación asociada al Freelancer
            Education::factory(3)->create([
                'freelancer_id' => $freelancer->id,
            ]);
        });
    }
}
