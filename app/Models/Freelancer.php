<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Freelancer extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'user_id',
        'first_name',
        'last_name',
        'nick_name',
        'display_name',
        'state',
        'city',
        'post_code',
        'address',
        'country_origin',
        'country_residence',
        'description',
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

    public function skillLevels()
    {
        return $this->hasMany(SkillLevel::class);
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

  

    /**
     * Relación polimórfica para el video.
     */
    public function files()
    {
        return $this->morphToMany(File::class, 'fileable')
        ->withPivot('type');
    }

    public function cover()
    {
        return $this->morphToMany(File::class, 'fileable')
        ->withPivot('type')
        ->wherePivot('type', 'cover'); 
    }

    public function video_presentation()
    {
        return $this->morphToMany(File::class, 'fileable')
        ->withPivot('type')
        ->wherePivot('type', 'video_presentation'); 
    }
}
