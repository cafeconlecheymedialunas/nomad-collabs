<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LanguageLevel extends Model
{
    use HasFactory;

    protected $fillable = ['language', 'level', 'can_work', 'language_id', 'user_id'];

    // Define the relationship with Language
    public function language()
    {
        return $this->belongsTo(Language::class);
    }

    // Define the relationship with User
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
