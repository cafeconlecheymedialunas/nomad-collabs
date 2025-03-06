<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Language extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'code'];

    // Define the relationship with LanguageLevel
    public function languageLevels()
    {
        return $this->hasMany(LanguageLevel::class);
    }
}
