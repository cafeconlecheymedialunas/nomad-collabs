<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Certification extends Model
{
    use HasFactory;

    // Campos que son asignables en masa
    protected $fillable = [
        'freelancer_id',
        'type',
        'institution',
        'title',
        'description',
        'file',
    ];

    // Relación con el modelo Freelancer
    public function freelancer()
    {
        return $this->belongsTo(Freelancer::class);
    }

    // Relación con el modelo File (fileable)
    public function file()
    {
        return $this->morphOne(File::class, 'fileable');
    }
}
