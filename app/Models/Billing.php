<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Billing extends Model
{
    use HasFactory;

    protected $fillable = [
        'date',
        'total',
        'invoice_url',
        'currency',
        'payment_method_id',
        'billable_id',
        'billable_type',
    ];

    // Relación polimórfica con las operaciones que pueden tener facturas
    public function billable()
    {
        return $this->morphTo();
    }
}
