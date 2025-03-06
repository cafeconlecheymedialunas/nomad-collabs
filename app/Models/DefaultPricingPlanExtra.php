<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DefaultPricingPlanExtra extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'is_required',
    ];

    /**
     * Relación con los extras de los planes personalizados
     */
    public function pricingPlanExtras()
    {
        return $this->hasMany(PricingPlanExtra::class, 'extra_id');
    }
}
