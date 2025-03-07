<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Milestone extends Model
{
    use HasFactory;

    protected $fillable = [
        'proposal_id',
        'title',
        'description',
        'cost',
        'duration',
        'status'
    ];

    // Relación con Proposal: Un milestone pertenece a una propuesta
    public function proposal()
    {
        return $this->belongsTo(Proposal::class);
    }
}
