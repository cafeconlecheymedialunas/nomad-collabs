<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;

     protected $fillable = [
        'freelancer_id',
        'service_type_id',
        'title',
        'description',
    ];

    public function freelancer()
    {
        return $this->belongsTo(Freelancer::class);
    }

    public function serviceType()
    {
        return $this->belongsTo(ServiceType::class);
    }


    public function tags()
    {
        return $this->morphToMany(Tag::class, 'taggable');
    }

    public function categories()
    {
        return $this->morphToMany(Category::class, 'categorizable');
    }
}
