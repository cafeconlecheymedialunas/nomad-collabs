<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ChatMessage extends Model
{
    use HasFactory;

    protected $fillable = [
        'chat_id',
        'sender_id',
        'date',
        'content',
        'is_read',
    ];

    // Relación con el chat al que pertenece el mensaje
    public function chat()
    {
        return $this->belongsTo(Chat::class);
    }

    // Relación con el usuario que envió el mensaje
    public function sender()
    {
        return $this->belongsTo(User::class, 'sender_id');
    }

    // Opcional: Si quieres formatear la fecha de manera específica
    public function getFormattedDateAttribute()
    {
        return $this->date->format('d-m-Y H:i');
    }
}
