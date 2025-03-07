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
        'state',
        'city',
        'post_code',
        'address',
        'nick_name',
        'description',
        'display_name',
        'country_origin',
        'country_residence',
        'cover',
        'account_active',
        'video',
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

    public function languageLevels()
    {
        return $this->hasMany(LanguageLevel::class);
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
        return $this->morphOne(Fileable::class, 'fileable')->where('type', 'cover');
    }

  
    public function introVideo()
    {
        return $this->morphOne(Fileable::class, 'videoable')->where('type', 'intro');
    }

}
