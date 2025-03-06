<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WorkingHour extends Model
{
    use HasFactory;

    // Especificamos la tabla que vamos a utilizar
    protected $table = 'working_hours';

    // Campos que son asignables en masa
    protected $fillable = [
        'day_of_week',
        'start_time',
        'end_time',
        'user_id'
    ];

    // Relación con el modelo User
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // Para manejar el formato de hora
    public function getStartTimeAttribute($value)
    {
        return \Carbon\Carbon::parse($value)->format('H:i');
    }

    public function getEndTimeAttribute($value)
    {
        return \Carbon\Carbon::parse($value)->format('H:i');
    }
}
