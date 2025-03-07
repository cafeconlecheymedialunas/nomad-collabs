<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WalletWithdraw extends Model
{
    use HasFactory;

    protected $fillable = [
        'amount',
        'date',
        'type',
        'description',
        'wallet_id',
    ];

    /**
     * Relación con el modelo Wallet
     * Una transacción pertenece a una billetera.
     */
    public function wallet()
    {
        return $this->belongsTo(Wallet::class);
    }

    public function billing()
    {
        return $this->morphOne(Billing::class, 'billable');
    }
}
