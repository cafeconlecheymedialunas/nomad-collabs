<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FieldChangeLog extends Model
{
    use HasFactory;

    protected $fillable = ['changeable_id', 'changeable_type', 'field_name', 'old_value', 'new_value', 'changed_by'];

    // Relación polimórfica
    public function changeable()
    {
        return $this->morphTo();
    }

    // Relación con el usuario que hizo el cambio
    public function changedBy()
    {
        return $this->belongsTo(User::class, 'changed_by');
    }
}
