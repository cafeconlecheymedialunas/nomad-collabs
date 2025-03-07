<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'estimated_delivery_date_start',
        'estimated_delivery_date_end',
        'estimated_cost_lowest',
        'estimated_cost_highest',
        'estimated_duration',
        'project_id',
    ];

    // Relación con el modelo Project
    public function project()
    {
        return $this->belongsTo(Project::class);
    }
}
