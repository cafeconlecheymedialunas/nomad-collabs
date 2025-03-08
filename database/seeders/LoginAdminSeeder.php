<?php

namespace Database\Seeders;

use App\Models\Buyer;
use App\Models\Certification;
use App\Models\Chat;
use App\Models\ChatMessage;
use App\Models\Education;
use App\Models\Faq;
use App\Models\Freelancer;
use App\Models\JobExperience;
use App\Models\Milestone;
use App\Models\Order;
use App\Models\PaymentMethod;
use App\Models\Portfolio;
use App\Models\Project;
use App\Models\Proposal;
use App\Models\Requirement;
use App\Models\Review;
use App\Models\Service;
use App\Models\Skill;
use App\Models\SkillLevel;
use App\Models\User;
use App\Models\Wallet;
use App\Models\WalletWithdraw;
use Illuminate\Database\Seeder;

class LoginAdminSeeder extends Seeder
{
    public function run()
    {
        // Crear usuario específico
        $freelancerUser = User::factory()->create([
            'name' => 'Mauro Developer',
            'email' => 'maurodeveloper86@gmail.com',
            'password' => bcrypt('arselocura1234'),
        ]);

        // Crear Freelancer asociado al usuario
        $freelancer = Freelancer::factory()->create([
            'user_id' => $freelancerUser->id,
        ]);

        // Crear habilidades y asignarlas al freelancer
        $skills = Skill::factory(5)->create();
        $skills->each(fn($skill) => SkillLevel::factory()->create([
            'freelancer_id' => $freelancer->id,
            'skill_id' => $skill->id,
        ]));

        // Crear educación
        Education::factory(2)->create(['freelancer_id' => $freelancer->id]);

        // Crear experiencia laboral
        JobExperience::factory(2)->create(['freelancer_id' => $freelancer->id]);

        // Crear portfolio
        Portfolio::factory(3)->create(['freelancer_id' => $freelancer->id]);

        // Crear certificaciones
        Certification::factory(2)->create(['freelancer_id' => $freelancer->id]);

        // Crear servicios
        $services = Service::factory(3)->create(['freelancer_id' => $freelancer->id]);

        // Crear preguntas frecuentes y requisitos para servicios
        $services->each(fn($service) => Faq::factory(2)->create(['service_id' => $service->id]));
        $services->each(fn($service) => Requirement::factory(2)->create(['service_id' => $service->id]));

        // Crear métodos de pago
        PaymentMethod::factory(1)->create(['user_id' => $freelancerUser->id]);

        // Crear billetera
        $wallet = Wallet::factory()->create(['user_id' => $freelancerUser->id]);

        // Crear retiros de billetera
        WalletWithdraw::factory(1)->create(['wallet_id' => $wallet->id]);

        // Crear chats y mensajes de chat
        $chat = Chat::factory()->create([
            'user_1_id' => $freelancerUser->id,
            'user_2_id' => User::factory()->create()->id, // Usuario aleatorio
        ]);
        ChatMessage::factory(3)->create([
            'chat_id' => $chat->id,
            'sender_id' => $freelancerUser->id,
        ]);

        $project = Project::factory()->create();

        $proposal = Proposal::factory()->create([
            'project_id' => $project->id,
            'freelancer_id' => $freelancer->id,
            'service_id' => $services->random()->id,
        ]);

        // Crear órdenes y revisiones
        $order = Order::factory()->create([
            'freelancer_id' => $freelancer->id,
            'buyer_id' => Buyer::factory()->create()->user_id,
            'proposal_id' => $proposal->id,
        ]);
        Review::factory()->create([
            'order_id' => $order->id,
            'reviewer_id' => User::factory()->create()->id,
        ]);

        // Crear proyectos y propuestas
       
      
        Milestone::factory(3)->create(['proposal_id' => $proposal->id]);
    }
}

