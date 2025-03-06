<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DefaultPricingPlanFeature extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'is_required',
    ];

    /**
     * Relación con las características de los planes personalizados
     */
    public function pricingPlanFeatures()
    {
        return $this->hasMany(PricingPlanFeature::class, 'feature_id');
    }
}
