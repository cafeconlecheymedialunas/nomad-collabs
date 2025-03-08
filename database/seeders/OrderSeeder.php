<?php

namespace Database\Seeders;

use App\Models\Payment;
use App\Models\Buyer;
use App\Models\Chat;
use App\Models\ChatMessage;
use App\Models\CreditsPurchase;
use App\Models\Freelancer;
use App\Models\Order;
use App\Models\PaymentMethod;
use App\Models\Project;
use App\Models\Review;
use App\Models\Service;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class OrderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
            // Crear órdenes relacionadas con freelancers, compradores y servicios
            $freelancers = Freelancer::all();
            $buyers = Buyer::all();
            $services = Service::all();
            $projects = Project::all();

            $orders = Order::factory(10)->create([
                'freelancer_id' => fn() => $freelancers->random()->user_id,
                'buyer_id' => fn() => $buyers->random()->user_id,
                "proposal_id" => fn() => $projects->random()->id
            ]);
    
            // Crear compras de créditos relacionadas con usuarios
            CreditsPurchase::factory(10)->create([
                'user_id' => fn() => $buyers->random()->user->id,
            ]);
    
            // Crear facturas relacionadas con métodos de pago y modelos facturables (orders o credits_purchases)
            Payment::factory(10)->create([
                'payment_method_id' => fn() => PaymentMethod::all()->random()->id,
                "order_id" => $orders->random()->id
            ]);
    
            // Crear chats relacionados con usuarios y servicios
            $chats = Chat::factory(10)->create([
                'user_1_id' => fn() => $buyers->random()->user->id,
                'user_2_id' => fn() => $freelancers->random()->user->id,
                'service_id' => fn() => $services->random()->id,
            ]);
    
            // Crear mensajes de chat relacionados con chats y usuarios
            ChatMessage::factory(10)->create([
                'chat_id' => fn() => $chats->random()->id,
                'sender_id' => fn() => $buyers->random()->user->id,
            ]);
    
            // Crear reseñas relacionadas con órdenes y usuarios
            $orders->each(function ($order) use ($buyers) {
                // Crear la reseña para cada orden
                Review::factory()->create([
                    'order_id' => $order->id,
                    'reviewer_id' => $buyers->random()->user->id,
                ]);
            });
    }
}
