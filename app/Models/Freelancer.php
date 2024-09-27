<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Freelancer extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'user_id',
        'first_name',
        'last_name',
        'birthday',
        'genre',
        'country_origin',
        'country_residence',
        'description',
        'video',
        'cover',
        'phone',
        'abilities',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function services()
    {
        return $this->hasMany(Service::class);
    }
   
    public function jobExperiences()
    {
        return $this->hasMany(JobExperience::class);
    }

    public function portfolios()
    {
        return $this->hasMany(Portfolio::class);
    }

    public function languages()
    {
        return $this->hasMany(Language::class);
    }

    public function educations()
    {
        return $this->hasMany(Education::class);
    }

    public function reviews()
    {
        return $this->hasMany(Review::class);
    }

    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }


    public function coverImage()
    {
        return $this->morphOne(File::class, 'fileable')->where('type', 'cover');
    }

  
    public function introVideo()
    {
        return $this->morphOne(File::class, 'videoable')->where('type', 'intro');
    }

}
