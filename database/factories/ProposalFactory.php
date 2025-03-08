<?php

namespace Database\Factories;

use App\Models\Buyer;
use App\Models\Freelancer;
use App\Models\Project;
use App\Models\Service;
use App\Models\Proposal;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProposalFactory extends Factory
{
    protected $model = Proposal::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'project_id' => Project::factory(), // Se crea un proyecto relacionado o se puede usar Project::inRandomOrder()->first()->id
            'freelancer_id' => Freelancer::factory(), // Se asigna un freelancer aleatorio
            'buyer_id' => Buyer::factory(), // Se asigna un buyer aleatorio
            'service_id' => Service::inRandomOrder()->first()->id ?? null, // Si se asigna un servicio aleatorio, sino null para custom order
            'parent_proposal_id' => null, // Asignar una propuesta padre si es necesario
            'proposal_type' => $this->faker->randomElement(['standard', 'custom_order']),
            'execution_type' => $this->faker->randomElement(['fixed', 'milestones']),
            'description' => $this->faker->paragraph(),
            'project_overview' => $this->faker->paragraph(),
            'revision_details' => $this->faker->paragraph(),
            'communication_plan' => $this->faker->text(),
            'status_update_frequency' => $this->faker->randomElement(['weekly', 'bi-weekly', 'monthly']),
            'references' => $this->faker->text(),
            'deliverables' => $this->faker->text(),
            'technology_stack' => $this->faker->word(),
            'project_goals' => $this->faker->text(),
            'revisions' => $this->faker->numberBetween(1, 5), // Número aleatorio de revisiones
            'cost' => $this->faker->randomFloat(2, 100, 10000), // Costo entre 100 y 10000
            'duration' => $this->faker->numberBetween(1, 365), // Duración entre 1 y 365 días
            'contract_start_date' => $this->faker->date(),
            'contract_end_date' => $this->faker->date(),
            'payment_method' => $this->faker->randomElement(['fixed', 'milestone_based']),
        ];
    }
}

