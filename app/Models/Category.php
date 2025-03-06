<?php

// app/Models/Category.php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'slug',
        'image',
        'service_id',  
    ];

    

    // Define the relationship with the Service model
    public function services()
    {
        return $this->belongsToMany(Service::class, 'category_service');
    }

    public function files()
    {
        return $this->morphMany(File::class, 'fileable');
    }
}


