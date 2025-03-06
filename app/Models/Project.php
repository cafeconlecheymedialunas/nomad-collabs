<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'freelancer_id',
        'title',
        'description',
        'url',
        'start',
        'end',
        'company',
    ];

    public function files()
    {
        return $this->morphMany(File::class, 'fileable');
    }

    public function freelancer()
    {
        return $this->belongsTo(Freelancer::class);
    }
}
