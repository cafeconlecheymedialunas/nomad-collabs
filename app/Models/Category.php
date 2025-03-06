<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    public function services()
    {
        return $this->morphedByMany(Service::class, 'categorizable');
    }

    public function freelancers()
    {
        return $this->morphedByMany(Freelancer::class, 'categorizable');
    }
}
