<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Skill extends Model
{
    use HasFactory;

    protected $fillable = [
        'freelancer_id',
        'title',
    ];

    /**
     * Relación con el modelo Freelancer.
     *
     * Una habilidad (skill) pertenece a un freelancer.
     */
    public function freelancer()
    {
        return $this->belongsTo(Freelancer::class);
    }
}
