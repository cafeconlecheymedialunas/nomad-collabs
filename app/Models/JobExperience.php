<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JobExperience extends Model
{
    use HasFactory;

    protected $fillable = [
        'freelancer_id',
        'title',
        'type',
        'company',
        'location',
        'init_at',
        'finish_at',
        'description',
        'current',
    ];

    public function freelancer()
    {
        return $this->belongsTo(Freelancer::class);
    }

}
