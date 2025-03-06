<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PricingPlanFeature extends Model
{
    use HasFactory;

    protected $fillable = [
        'plan_id',
        'feature_id',
        'name',
        'description',
        'value',
    ];

    /**
     * Relación con el modelo Plan
     */
    public function plan()
    {
        return $this->belongsTo(Plan::class);
    }

    /**
     * Relación con el modelo DefaultPricingPlanFeature
     */
    public function feature()
    {
        return $this->belongsTo(DefaultPricingPlanFeature::class);
    }
}
