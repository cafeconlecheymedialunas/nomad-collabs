<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Skill extends Model
{
    use HasFactory;

    protected $fillable = ['title'];

    // Define the relationship with SkillLevel
    public function skillLevels()
    {
        return $this->hasMany(SkillLevel::class);
    }
    public function services()
    {
        return $this->belongsToMany(Service::class, 'skill_service');
    }
}
}
