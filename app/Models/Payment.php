<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    use HasFactory;

    protected $fillable = [
        'date',
        'total',
        'invoice_url',
        'currency',
        'payment_method_id',
        'order_id',
        'user_id',
    ];

    // Relación polimórfica con las operaciones que pueden tener facturas
    public function billable()
    {
        return $this->morphTo();
    }
}
