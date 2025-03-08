<?php

namespace Database\Factories;

use App\Models\PaymentMethod;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class PaymentMethodFactory extends Factory
{
    protected $model = PaymentMethod::class;

    public function definition()
    {
        return [
            'email' => $this->faker->unique()->safeEmail, // Correo electrónico generado aleatoriamente
            'public_key' => $this->faker->word, // Aquí deberías usar un valor de prueba
            'secret_key' => $this->faker->word, // Aquí también deberías usar un valor de prueba
            'type' => $this->faker->randomElement(['paypal', 'mercado_pago', 'stripe']), // Tipo aleatorio de método de pago
            'user_id' => User::factory(), // Relación con un usuario creado por la fábrica de usuarios
        ];
    }

}
