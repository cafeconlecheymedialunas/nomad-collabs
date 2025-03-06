<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'freelancer_id',
        'buyer_id',
        'service_id',
        'total',
        'date',
        'operation_id',
    ];

    /**
     * Relación con el modelo Freelancer
     * Un pedido pertenece a un freelancer.
     */
    public function freelancer()
    {
        return $this->belongsTo(User::class, 'freelancer_id');
    }

    /**
     * Relación con el modelo Buyer
     * Un pedido pertenece a un buyer.
     */
    public function buyer()
    {
        return $this->belongsTo(User::class, 'buyer_id');
    }

    /**
     * Relación con el modelo Service
     * Un pedido pertenece a un servicio.
     */
    public function service()
    {
        return $this->belongsTo(Service::class);
    }

    public function billing()
    {
        return $this->morphOne(Billing::class, 'billable');
    }
}
