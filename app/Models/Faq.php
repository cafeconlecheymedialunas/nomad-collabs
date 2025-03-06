<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Faq extends Model
{
    use HasFactory;

    protected $fillable = [
        'service_id',
        'answer',
        'response'
    ];

    // Relación con Service
    public function service()
    {
        return $this->belongsTo(Service::class);
    }
}

