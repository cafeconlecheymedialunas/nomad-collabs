<?php

namespace Database\Factories;

use App\Models\Proposal;
use App\Models\Project;
use App\Models\Freelancer;
use App\Models\Service;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProposalFactory extends Factory
{
    protected $model = Proposal::class;

    public function definition()
    {
        return [
            'project_id' => Project::factory(),
            'freelancer_id' => Freelancer::factory(),
            'service_id' => Service::factory(),
            'description' => $this->faker->paragraph,
            'proposal_type' => $this->faker->randomElement(['fixed', 'milestones']),
            'estimated_duration' => $this->faker->numberBetween(1, 60),
            'estimated_cost' => $this->faker->randomFloat(2, 100, 5000),
            'revisions' => $this->faker->randomElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
        ];
    }
}
