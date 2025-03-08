<?php

namespace Database\Seeders;

use App\Models\Buyer;
use App\Models\Freelancer;
use App\Models\Milestone;
use App\Models\PaymentMethod;
use App\Models\Project;
use App\Models\Proposal;
use App\Models\Service;
use App\Models\Skill;
use App\Models\User;
use App\Models\Wallet;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class BuyerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Crear 10 usuarios
        $users = User::factory(10)->create();

        $buyers = collect([]);
        $services = Service::all();
        $skills = Skill::all();

        $freelancers = Freelancer::all();
        // Recorrer cada usuario
        $users->each(function ($user) use ($buyers,$services,$skills,$freelancers) {
            // Asignar un método de pago aleatorio
            PaymentMethod::factory(3)->create([
                'user_id' => $user->id, // Relación con el usuario existente
            ]);
            // Crear un comprador asociado al usuario
            $buyer = Buyer::factory()->create([
                'user_id' => $user->id,
            ]);

            // Crear una billetera para el usuario
            Wallet::factory()->create([
                'user_id' => $user->id, // Cada usuario tiene una billetera única
            ]);

            // Puedes hacer lo que necesites con los compradores, si necesitas almacenarlos en una colección
            $buyers->push($buyer);

            // Crear proyectos (para propuestas)
            $projects = Project::factory(10)->create([
                'buyer_id' => fn() => $buyers->random()->id,
            ]);

           
            // Asigna entre 1 y 5 habilidades aleatorias
            $usedCombinations = [];

            $projects->each(function ($project) use ($skills, $buyer, $services, $freelancers, &$usedCombinations) {
                $project->skills()->attach($skills->random(rand(1, 5)));

                for ($i = 0; $i < 3; $i++) { // Intentamos generar 3 propuestas únicas por proyecto
                
                    $service = $services->random();
                    $freelancer = $freelancers->random(); // Freelancer ahora viene del modelo correcto

                    // Verificar que la combinación no exista
                    $combinationKey = "{$buyer->id}-{$service->id}-{$project->id}-{$freelancer->id}";

                    if (!isset($usedCombinations[$combinationKey])) {
                        // Guardamos la combinación usada
                        $usedCombinations[$combinationKey] = true;

                        $proposal = Proposal::factory()->create([
                            'project_id' => $project->id,
                            'buyer_id' => $buyer->id,
                            'service_id' => $service->id,
                            'freelancer_id' => $freelancer->id, // Ahora tomamos el ID del freelancer
                        ]);

                        // Crear milestones para la propuesta
                        Milestone::factory(rand(1, 5))->create([
                            'proposal_id' => $proposal->id,
                            'title' => 'Hito para ' . $proposal->id,
                            'description' => 'Descripción del hito',
                            'cost' => rand(50, 500),
                            'duration' => rand(1, 15),
                            'status' => 'pending',
                        ]);
                    }
                }
            });
        });


        // Crear una wallet única por usuario


        // Crear compradores relacionados con usuarios


        // Obtener todos los servicios
       
    }
}
