<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ServiceType extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'parent_id',
    ];


    public function parent()
    {
        return $this->belongsTo(ServiceType::class, 'parent_id');
    }


    public function children()
    {
        return $this->hasMany(ServiceType::class, 'parent_id');
    }

    public function services()
    {
        return $this->hasMany(Service::class);
    }
}
