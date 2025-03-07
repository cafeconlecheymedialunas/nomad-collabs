<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'project_type',
        'project_duration',
        'languages_required',
        'buyer_type',
        'location',
        'posted_at',
        'views',
        'attachments',
        'estimated_delivery_date_start',
        'estimated_delivery_date_end',
        'estimated_cost_lowest',
        'estimated_cost_highest',
        'difficulty_level',
        'buyer_id',
    ];

    // Para convertir campos JSON a array automáticamente
    protected $casts = [
        'languages_required' => 'array',  // Convierte este campo JSON en un array
        'attachments' => 'array',  // Convierte este campo JSON en un array
        'posted_at' => 'datetime',  // Asegura que sea tratado como una fecha
        'estimated_delivery_date_start' => 'datetime',  // Asegura que sea tratado como una fecha
        'estimated_delivery_date_end' => 'datetime',  // Asegura que sea tratado como una fecha
        'estimated_cost_lowest' => 'decimal:2',  // Campo de costo más bajo
        'estimated_cost_highest' => 'decimal:2',  // Campo de costo más alto
    ];

    // Relación con Buyer
    public function buyer()
    {
        return $this->belongsTo(Buyer::class);
    }

    // Relación muchos a muchos con Skill
    public function skills()
    {
        return $this->belongsToMany(Skill::class, 'project_skill');
    }

    public function tasks()
    {
        return $this->hasMany(Task::class);
    }
}
