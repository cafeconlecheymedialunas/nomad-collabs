<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Plan extends Model
{
    use HasFactory;

    protected $fillable = [
        'service_id',
        'type',
        'name',
        'description',
        'price',
    ];

    /**
     * Relación con el modelo Service
     */
    public function service()
    {
        return $this->belongsTo(Service::class);
    }

    /**
     * Relación con las características del plan
     */
    public function features()
    {
        return $this->hasMany(PricingPlanFeature::class);
    }

    /**
     * Relación con los extras del plan
     */
    public function extras()
    {
        return $this->hasMany(PricingPlanExtra::class);
    }

    /**
     * Método de validación de restricción única
     */
    public static function boot()
    {
        parent::boot();

        static::creating(function ($plan) {
            // Verificar si el servicio ya tiene un plan del mismo tipo
            $existingPlan = self::where('service_id', $plan->service_id)
                ->where('type', $plan->type)
                ->first();

            if ($existingPlan) {
                throw new \Exception("Ya existe un plan de tipo {$plan->type} para este servicio.");
            }
        });
    }
}
