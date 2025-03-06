<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    use HasFactory;

    protected $fillable = ['name'];

    public function services()
    {
        return $this->morphedByMany(Service::class, 'taggable');
    }

    public function freelancers()
    {
        return $this->morphedByMany(Freelancer::class, 'taggable');
    }
}
