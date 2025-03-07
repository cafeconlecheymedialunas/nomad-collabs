<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Buyer extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id', 
        'first_name',
        'last_name',
        'state',
        'city',
        'post_code',
        'address',
        'nick_name',
        'description',
        'display_name',
        'country_origin',
        'country_residence',
        'cover',
        'company_name',
        'company_state',
        'company_city',
        'company_post_code',
        'company_address',
        'company_country',
        'buyer_type',
        'account_active'
    ];

    // Relación con el modelo User
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function projects()
    {
        return $this->hasMany(Project::class);
    }
}
