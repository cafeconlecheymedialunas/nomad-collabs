<?php


namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SkillLevel extends Model
{
    use HasFactory;

    protected $fillable = ['freelancer_id', 'skill_id', 'level'];

    // Define the relationship with Skill
    public function skill()
    {
        return $this->belongsTo(Skill::class);
    }

    // Define the relationship with Freelancer
    public function freelancer()
    {
        return $this->belongsTo(Freelancer::class);
    }
}

