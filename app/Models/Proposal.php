<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Proposal extends Model
{
    use HasFactory;

    protected $fillable = [
        'project_id',
        'freelancer_id',
        'service_id',
        'description',
        'proposal_type',
        'estimated_duration',
        'estimated_cost',
        'revisions'
    ];

    // Relación con Milestone: Una propuesta puede tener muchos hitos
    public function milestones()
    {
        return $this->hasMany(Milestone::class);
    }

    // Relación con Project, Freelancer y Service
    public function project()
    {
        return $this->belongsTo(Project::class);
    }

    public function freelancer()
    {
        return $this->belongsTo(Freelancer::class);
    }

    public function service()
    {
        return $this->belongsTo(Service::class);
    }
}
