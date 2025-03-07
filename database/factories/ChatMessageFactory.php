<?php

namespace Database\Factories;

use App\Models\ChatMessage;
use Illuminate\Database\Eloquent\Factories\Factory;

class ChatMessageFactory extends Factory
{
    protected $model = ChatMessage::class;

    public function definition()
    {
        return [
            'chat_id' => \App\Models\Chat::factory(),
            'sender_id' => \App\Models\User::factory(),
            'date' => $this->faker->dateTime,
            'content' => $this->faker->paragraph,
            'is_read' => $this->faker->boolean,
        ];
    }
}