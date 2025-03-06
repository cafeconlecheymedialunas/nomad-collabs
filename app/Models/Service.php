<?php

// app/Models/Service.php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;

    protected $fillable = [
        'freelancer_id',
        'category_id',
        'skill_id',
        'title',
        'description',
        'active',
        'tag_id', // Only needed if you're using a single tag
    ];

   /**
     * Get the freelancer that owns the service.
     */
    public function freelancer()
    {
        return $this->belongsTo(Freelancer::class);
    }

    /**
     * Get the categories associated with the service.
     */
    public function categories()
    {
        return $this->belongsToMany(Category::class, 'category_service');
    }

    /**
     * Get the skills associated with the service.
     */
    public function skills()
    {
        return $this->belongsToMany(Skill::class, 'skill_service');
    }

    /**
     * Get the tags associated with the service.
     */
    public function tags()
    {
        return $this->belongsToMany(Tag::class, 'service_tag');
    }
}
