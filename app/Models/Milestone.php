<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Milestone extends Model
{
    use HasFactory;

    // Definir los campos que pueden ser asignados en masa
    protected $fillable = [
        'proposal_id',
        'title',
        'description',
        'cost',
        'revisions',
        'type',
        'meeting',
        'deliverable',
        'estimation_optimistic',
        'estimation_more_probabbly',
        'estimation_pesimistic',
        'estimated_time',
        'init_at',
        'finish_at',
        'status'
    ];


    protected static function booted()
    {
        parent::boot();
        static::updating(function ($milestone) {

            
            foreach ($milestone->getDirty() as $field => $newValue) {
                // Comprobar si el campo tiene un valor antiguo y nuevo diferente
                $oldValue = $milestone->getOriginal($field);
                
                if ($oldValue != $newValue) {
                    // Guardar el cambio en la tabla de field_changes con relación polimórfica
                    FieldChangeLog::create([
                        'changeable_id' => $milestone->id,
                        'changeable_type' => Milestone::class,
                        'field_name' => $field,
                        'old_value' => $oldValue,
                        'new_value' => $newValue,
                        'changed_by' => auth()->id(), // Usuario que hizo el cambio
                    ]);
                }
            }
        });
    }


    // Relación con Proposal: Un milestone pertenece a una propuesta
    public function proposal()
    {
        return $this->belongsTo(Proposal::class);
    }

    public function tasks()
    {
        return $this->hasMany(Task::class);
    }
}
