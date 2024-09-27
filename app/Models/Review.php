<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    use HasFactory;

    protected $fillable = [
        'score',
        'freelancer_id',
        'comment',
    ];

    public function freelancer()
    {
        return $this->belongsTo(Freelancer::class);
    }
}
