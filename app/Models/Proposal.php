<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Proposal extends Model
{
    use HasFactory;

  
       // Definir las columnas que se pueden asignar masivamente
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
        'contract_start_date',
        'contract_end_date',
        'estimation_time_units',
        'estimation_optimistic',
        'estimation__more_probabbly',
        'estimation_pesimistic',
        'time_estimated',
        'payment_method'
    ];

    protected static function booted()
    {

        parent::boot();
        
        static::updating(function ($proposal) {
            foreach ($proposal->getDirty() as $field => $newValue) {
                // Comprobar si el campo tiene un valor antiguo y nuevo diferente
                $oldValue = $proposal->getOriginal($field);
                
                if ($oldValue != $newValue) {
                    // Guardar el cambio en la tabla de field_changes con relación polimórfica
                    FieldChangeLog::create([
                        'changeable_id' => $proposal->id,
                        'changeable_type' => Proposal::class,
                        'field_name' => $field,
                        'old_value' => $oldValue,
                        'new_value' => $newValue,
                        'changed_by' => auth()->id(), // Usuario que hizo el cambio
                    ]);
                }
            }
        });
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

    
    // Relación con Milestone: Una propuesta puede tener muchos hitos
    public function milestones()
    {
        return $this->hasMany(Milestone::class);
    }

    // Relación con Tasks
    public function tasks()
    {
        return $this->hasMany(Task::class);
    }

    
 
}
