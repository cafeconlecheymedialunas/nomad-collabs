<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    protected $table = "tasks";
    protected $fillable = [
        'proposal_id', 
        'parent_id', 
        'milestone_id', 
        'title', 
        'description', 
        'status', 
        'estimation_optimistic', 
        'estimation_pessimistic', 
        'estimation_most_probably', 
        'estimated_time', 
        'start_date', 
        'end_date'
    ];
   
    public function proposal()
    {
        return $this->belongsTo(Proposal::class);
    }

    // Relación con Milestone
    public function milestone()
    {
        return $this->belongsTo(Milestone::class);
    }

    public function parent()
    {
        return $this->belongsTo(Task::class, 'parent_id');
    }

    public function subTasks()
    {
        return $this->hasMany(Task::class, 'parent_id');
    }


    public static function boot()
    {
        parent::boot();

        static::saving(function ($task) {
            if (!$task->milestone_id && !$task->proposal_id) {
                throw new \Exception('Task must be assigned to either a milestone or a proposal');
            }
        });

        static::updating(function ($task) {
            foreach ($task->getDirty() as $field => $newValue) {
                // Comprobar si el campo tiene un valor antiguo y nuevo diferente
                $oldValue = $task->getOriginal($field);
                
                if ($oldValue != $newValue) {
                    // Guardar el cambio en la tabla de field_changes con relación polimórfica
                    FieldChangeLog::create([
                        'changeable_id' => $task->id,
                        'changeable_type' => Task::class,
                        'field_name' => $field,
                        'old_value' => $oldValue,
                        'new_value' => $newValue,
                        'changed_by' => auth()->id(), // Usuario que hizo el cambio
                    ]);
                }
            }
        });
    }

    
}
