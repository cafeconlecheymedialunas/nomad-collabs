<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;

    protected $fillable = [
        'freelancer_id',
        'title',
        'description',
        'images',
        'video',
        'documents',
        'active',
    ];

    protected $casts = [
        'images' => 'array',
        'documents' => 'array',
    ];

 

    public function freelancer()
    {
        return $this->belongsTo(Freelancer::class);
    }

    public function categories()
    {
        return $this->belongsToMany(Category::class, 'category_service');
    }

    public function tags()
    {
        return $this->belongsToMany(Tag::class, 'service_tag');
    }

    public function faqs()
    {
        return $this->hasMany(Faq::class);
    }

    public function requirements()
    {
        return $this->hasMany(Requirement::class);
    }

    // Relación con los planes
    public function plans()
    {
        return $this->hasMany(Plan::class);
    }

    // Relación con características de planes
    public function features()
    {
        return $this->belongsToMany(DefaultPricingPlanFeature::class, 'pricing_plan_features');
    }

    // Relación con extras de planes
    public function extras()
    {
        return $this->belongsToMany(DefaultPricingPlanExtra::class, 'pricing_plan_extras');
    }

    public function files()
    {
        return $this->morphMany(File::class, 'fileable');
    }
}
