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
        'buyer_id',
        'service_id',
        'parent_proposal_id',
        'proposal_type',
        'execution_type',
        'description',
        'project_overview',
        'revision_details',
        'communication_plan',
        'status_update_frequency',
        'references',
        'deliverables',
        'technology_stack',
        'project_goals',
        'revisions',
        'cost',
        'duration',
        'contract_start_date',
        'contract_end_date',
        'payment_method',
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


    public function buyer()
    {
        return $this->belongsTo(Buyer::class);
    }

    public function parentProposal()
    {
        return $this->belongsTo(Proposal::class, 'parent_proposal_id');
    }

    public function childProposals()
    {
        return $this->hasMany(Proposal::class, 'parent_proposal_id');
    }
}
