<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CreditsPurchase extends Model
{
    use HasFactory;

    protected $fillable = [
        'date',
        'amount_spent',
        'currency_received',
        'user_id',
        'sku',
    ];

    /**
     * Relación con el modelo User
     * Una compra de créditos pertenece a un usuario.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function payment()
    {
        return $this->morphOne(Payment::class, 'billable');
    }
}
