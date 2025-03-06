<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Wallet extends Model
{
    use HasFactory;

    protected $fillable = [
        'balance',
        'user_id',
    ];

    /**
     * Relación con el modelo User
     * Un wallet pertenece a un usuario.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
