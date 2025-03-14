<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class File extends Model
{
    use HasFactory;

    protected $fillable = [
        'path', 
        'name',
        'mime_type',
        'alt'
    ];

    public function fileables()
    {
        return $this->morphToMany(File::class, 'fileable');
    }
}
