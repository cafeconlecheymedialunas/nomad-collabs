<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PaymentMethod extends Model
{
    use HasFactory;

    protected $fillable = [
        'card_number',
        'card_expiration_date',
        'card_security_code',
        'card_calholders_name',
        'paypal_email',
        'mercado_pago_email',
        'stripe_email',
        'user_id',
    ];

    /**
     * Relación con el modelo User
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
