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
            'project_id' => Project::factory(),
            'freelancer_id' => Freelancer::factory(),
            'buyer_id' => Buyer::factory(),
            'service_id' => Service::factory(),
            'parent_proposal_id' => null, // Puede ser una propuesta existente si es necesario
            'proposal_type' => $this->faker->randomElement(['standard', 'custom_order']),
            'execution_type' => $this->faker->randomElement(['fixed', 'milestones']),
            'description' => $this->faker->text(),
            'project_overview' => $this->faker->optional()->text(),
            'revision_details' => $this->faker->optional()->text(),
            'communication_plan' => $this->faker->optional()->text(),
            'status_update_frequency' => $this->faker->word(),
            'references' => $this->faker->optional()->text(),
            'deliverables' => $this->faker->optional()->text(),
            'technology_stack' => $this->faker->optional()->text(),
            'project_goals' => $this->faker->optional()->text(),
            'revisions' => $this->faker->numberBetween(1, 5),
            'cost' => $this->faker->randomFloat(2, 100, 5000),
            'contract_start_date' => $this->faker->date(),
            'contract_end_date' => $this->faker->date(),
            'estimation_time_units' => $this->faker->randomElement(['days', 'hours']),
            'estimation_optimistic' => $this->faker->numberBetween(1, 10),
            'estimation__more_probabbly' => $this->faker->numberBetween(10, 20),
            'estimation_pesimistic' => $this->faker->numberBetween(20, 30),
            'time_estimated' => $this->faker->numberBetween(1, 50),
            'payment_method' => $this->faker->randomElement(['fixed', 'milestone_based']),
        ];
    }
}

