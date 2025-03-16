<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Illuminate\Database\Eloquent\Casts\Attribute;

class File extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'path', 'name', 'mime_type', 'alt'];

    protected $appends = ['image_url'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }


    public function fileable()
    {
        return $this->morphTo();
    }

    // Relación con la tabla 'fileables'
    public function fileables()
    {
        return $this->hasMany(Fileable::class);
    }

    // 📌 Accessor para obtener la URL de la imagen
    protected function imageUrl(): Attribute
    {
        return Attribute::make(
            get: fn () => Storage::url($this->path),
        );
    }
}
