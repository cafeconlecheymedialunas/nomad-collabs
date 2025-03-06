<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    use HasFactory;

    protected $fillable = [
        'order_id', 
        'reviewer_id', 
        'date', 
        'rating', 
        'comment'
    ];

    // Relación con el pedido (order) al que pertenece la reseña
    public function order()
    {
        return $this->belongsTo(Order::class);
    }

    // Relación con el revisor (user) que dejó la reseña
    public function reviewer()
    {
        return $this->belongsTo(User::class, 'reviewer_id');
    }
}
