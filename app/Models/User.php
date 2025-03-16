<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    public function freelancer(){
        return $this->belongsTo(Freelancer::class);
    }

    public function buyer(){
        return $this->belongsTo(Buyer::class);
    }

    public function workingHours()
    {
        return $this->hasMany(WorkingHour::class);
    }

    public function paymentMethods()
    {
        return $this->hasMany(PaymentMethod::class);
    }


    public function chats()
    {
        return $this->hasMany(Chat::class, 'user_1_id')
                    ->orWhere('user_2_id', $this->id); // O también está como user_2
    }

    // Relación con los mensajes de los chats donde el usuario está involucrado
    public function messages()
    {
        return $this->hasManyThrough(ChatMessage::class, Chat::class, 'user_1_id', 'chat_id', 'id', 'id')
                    ->orWhereHas('user2', function ($query) {
                        $query->where('user_2_id', $this->id);
                    });
    }

    public function files(): HasMany
    {
        return $this->hasMany(File::class)->orderBy('created_at', 'desc');
    }
    
}
