<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Fileable extends Model
{
    use HasFactory;

    protected $fillable = [
        'file_id',
        'fileable_type',
        'fileable_id'
    ];

    public $timestamps = false; // No es necesario tener los timestamps para esta tabla

    // Relación inversa: un fileable puede pertenecer a un archivo
    public function file()
    {
        return $this->belongsTo(File::class);
    }
}
