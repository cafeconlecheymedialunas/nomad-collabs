<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Language;
use App\Models\LanguageLevel;
use App\Models\Buyer;
use App\Models\Freelancer;
use App\Models\Skill;
use App\Models\Education;
use App\Models\JobExperience;
use App\Models\Portfolio;
use App\Models\SkillLevel;
use App\Models\Category;
use App\Models\Tag;
use App\Models\Service;
use App\Models\File;
use App\Models\Certification;
use App\Models\Faq;
use App\Models\Plan;
use App\Models\DefaultPricingPlanFeature;
use App\Models\PricingPlanFeature;
use App\Models\DefaultPricingPlanExtra;
use App\Models\PricingPlanExtra;
use App\Models\Requirement;
use App\Models\PaymentMethod;
use App\Models\Wallet;
use App\Models\WalletWithdraw;
use App\Models\Order;
use App\Models\CreditsPurchase;
use App\Models\Billing;
use App\Models\Chat;
use App\Models\ChatMessage;
use App\Models\Project;
use App\Models\Review;
use App\Models\WorkingHour;
use App\Models\Proposal;
use App\Models\Milestone;
use App\Models\Task;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        // Crear usuarios
        $users = User::factory(10)->create();

        // Crear idiomas
        $languages = Language::factory(10)->create();

        // Crear niveles de idioma relacionados con usuarios e idiomas
        LanguageLevel::factory(10)->create([
            'user_id' => fn() => $users->random()->id,
            'language_id' => fn() => $languages->random()->id,
        ]);

        // Crear compradores relacionados con usuarios
        Buyer::factory(10)->create([
            'user_id' => fn() => $users->random()->id,
        ]);

        // Crear freelancers relacionados con usuarios
        $freelancers = Freelancer::factory(10)->create([
            'user_id' => fn() => $users->random()->id,
        ]);

        // Crear habilidades
        $skills = Skill::factory(10)->create();

        // Crear educaciones relacionadas con freelancers
        Education::factory(10)->create([
            'freelancer_id' => fn() => $freelancers->random()->id,
        ]);

        // Crear experiencias laborales relacionadas con freelancers
        JobExperience::factory(10)->create([
            'freelancer_id' => fn() => $freelancers->random()->id,
        ]);

        // Crear proyectos relacionados con freelancers
        Portfolio::factory(10)->create([
            'freelancer_id' => fn() => $freelancers->random()->id,
        ]);

        // Crear niveles de habilidad relacionados con freelancers y habilidades
        SkillLevel::factory(10)->create([
            'freelancer_id' => fn() => $freelancers->random()->id,
            'skill_id' => fn() => $skills->random()->id,
        ]);

        // Crear categorías
        $categories = Category::factory(10)->create();

        // Crear etiquetas
        $tags = Tag::factory(10)->create();

        // Crear servicios relacionados con freelancers
        $services = Service::factory(10)->create([
            'freelancer_id' => fn() => $freelancers->random()->id,
        ]);

        // Crear proyectos (Para Proposals)
        $projects = Project::factory(10)->create();

        // Crear propuestas relacionadas con proyectos, freelancers y servicios
        $proposals = Proposal::factory(10)->create([
            'project_id' => fn() => $projects->random()->id,
            'freelancer_id' => fn() => $freelancers->random()->id,
            'service_id' => fn() => $services->random()->id,
        ]);

        // Crear milestones relacionados con las propuestas
        $proposals->each(function ($proposal) {
            Milestone::factory(rand(1, 5))->create([ // Creamos entre 1 y 5 hitos por propuesta
                'proposal_id' => $proposal->id,
                'title' => 'Hito para ' . $proposal->title,
                'description' => 'Descripción del hito',
                'cost' => rand(50, 500),
                'duration' => rand(1, 15), // Duración entre 1 y 15 días
                'status' => 'pending', // Estado predeterminado
            ]);
        });

        // Crear archivos
        $files = File::factory(10)->create();

        // Crear horas de trabajo relacionadas con usuarios
        WorkingHour::factory(10)->create([
            'user_id' => fn() => $users->random()->id,
        ]);

        // Crear certificaciones relacionadas con freelancers
        Certification::factory(10)->create([
            'freelancer_id' => fn() => $freelancers->random()->id,
        ]);

        // Crear preguntas frecuentes relacionadas con servicios
        Faq::factory(10)->create([
            'service_id' => fn() => $services->random()->id,
        ]);

        // Crear requisitos relacionados con servicios
        Requirement::factory(10)->create([
            'service_id' => fn() => $services->random()->id,
        ]);

        // Crear métodos de pago relacionados con usuarios
        PaymentMethod::factory(10)->create([
            'user_id' => fn() => $users->random()->id,
        ]);

        // Crear billeteras relacionadas con usuarios
        $wallets = Wallet::factory(10)->create([
            'user_id' => fn() => $users->random()->id,
        ]);

        // Crear retiros de billetera relacionados con billeteras
        WalletWithdraw::factory(10)->create([
            'wallet_id' => fn() => $wallets->random()->id,
        ]);

        // Crear órdenes relacionadas con freelancers, compradores y servicios
        $orders = Order::factory(10)->create([
            'freelancer_id' => fn() => $freelancers->random()->id,
            'buyer_id' => fn() => Buyer::all()->random()->user_id,
            'service_id' => fn() => $services->random()->id,
        ]);

        // Crear compras de créditos relacionadas con usuarios
        CreditsPurchase::factory(10)->create([
            'user_id' => fn() => $users->random()->id,
        ]);

        // Crear facturas relacionadas con métodos de pago y modelos facturables (orders o credits_purchases)
        Billing::factory(10)->create([
            'payment_method_id' => fn() => PaymentMethod::all()->random()->id,
            'billable_id' => fn() => rand(0, 1) ? Order::all()->random()->id : CreditsPurchase::all()->random()->id,
            'billable_type' => fn() => rand(0, 1) ? Order::class : CreditsPurchase::class,
        ]);

        // Crear chats relacionados con usuarios y servicios
        $chats = Chat::factory(10)->create([
            'user_1_id' => fn() => $users->random()->id,
            'user_2_id' => fn() => $users->random()->id,
            'service_id' => fn() => $services->random()->id,
        ]);

        // Crear mensajes de chat relacionados con chats y usuarios
        ChatMessage::factory(10)->create([
            'chat_id' => fn() => $chats->random()->id,
            'sender_id' => fn() => $users->random()->id,
        ]);

        // Crear reseñas relacionadas con órdenes y usuarios
        $orders->each(function ($order) use ($users) {
            // Crear la reseña para cada orden
            Review::factory()->create([
                'order_id' => $order->id,
                'reviewer_id' => $users->random()->id,
            ]);
        });

        $projects->each(function($project) use ($freelancers,$services){
            $skills = Skill::all()->random(rand(1, 5));  // Asigna entre 1 y 5 habilidades aleatorias
            $project->skills()->attach($skills);
            // Crear entre 1 y 5 tareas aleatorias para el proyecto
            Task::factory()->count(rand(1, 5))->create([
                'project_id' => $project->id,  // Asignar el proyecto creado
            ]);

            $proposal = Proposal::factory()->create([
                'project_id' => $project->id,  // Asignar el proyecto creado
                "freelancer_id" => $freelancers->random()->id,
                "service_id" => $freelancers->random()->id,
            ]);

            Milestone::factory()->count(rand(1, 5))->create([
                'proposal_id' => $proposal->id, 
            ]);


        });
    }
}
