<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PricingPlanExtra extends Model
{
    use HasFactory;

    protected $fillable = [
        'plan_id',
        'extra_id',
        'name',
        'description',
        'extra_delivery',
        'extra_cost',
    ];

    /**
     * Relación con el modelo Plan
     */
    public function plan()
    {
        return $this->belongsTo(Plan::class);
    }

    /**
     * Relación con el modelo DefaultPricingPlanExtra
     */
    public function extra()
    {
        return $this->belongsTo(DefaultPricingPlanExtra::class);
    }
}
