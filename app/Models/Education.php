<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Education extends Model
{
    use HasFactory;

    protected $fillable = [
        'type',
        'institution',
        'title',
        'description',
        'finished',
        'init_at',
        'finish_at',
        'freelancer_id',
    ];

    /**
     * Get the freelancer that owns the study.
     */
    public function freelancer()
    {
        return $this->belongsTo(Freelancer::class);
    }
}
