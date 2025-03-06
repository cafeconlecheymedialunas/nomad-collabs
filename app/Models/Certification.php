<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Certification extends Model
{
    use HasFactory;

    protected $fillable = [
        'freelancer_id',
        'title',
        'issued_by',
        'issue_date',
        'expiration_date',
    ];

    public function freelancer()
    {
        return $this->belongsTo(Freelancer::class);
    }
}
