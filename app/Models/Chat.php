<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chat extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_1_id',
        'user_2_id',
        'service_id',
    ];

    // Relación con el primer usuario (User)
    public function user1()
    {
        return $this->belongsTo(User::class, 'user_1_id');
    }

    // Relación con el segundo usuario (User)
    public function user2()
    {
        return $this->belongsTo(User::class, 'user_2_id');
    }

    // Relación con el servicio, si existe
    public function service()
    {
        return $this->belongsTo(Service::class);
    }

    // Relación con los mensajes del chat
    public function messages()
    {
        return $this->hasMany(ChatMessage::class);
    }
}
