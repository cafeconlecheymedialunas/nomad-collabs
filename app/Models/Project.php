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
        'start',
        'end',
        'company',
        'country',
        'description',
        'current',
    ];

    /**
     * Relación con Freelancer.
     */
    public function freelancer()
    {
        return $this->belongsTo(Freelancer::class);
    }

    public function files()
    {
        return $this->morphMany(File::class, 'fileable');
    }
}
