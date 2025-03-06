<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Language extends Model
{
    use HasFactory;

    protected $fillable = [
        'freelancer_id',
        'language',
        'level',
        'can_work',
    ];

    public function freelancer()
    {
        return $this->belongsTo(Freelancer::class);
    }
}
