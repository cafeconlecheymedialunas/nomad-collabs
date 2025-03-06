<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JobExperience extends Model
{
    use HasFactory;

    protected $fillable = [
        'freelancer_id',
        'title',
        'type_of_job',
        'company_type',
        'company_name',
        'country',
        'start',
        'end',
        'description',
        'current',
    ];

    public function freelancer()
    {
        return $this->belongsTo(Freelancer::class);
    }

}
