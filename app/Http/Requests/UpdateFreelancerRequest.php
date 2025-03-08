<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateFreelancerRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true; // Cambia esto según sea necesario si quieres agregar autorización.
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'state' => 'nullable|string|max:255',
            'city' => 'nullable|string|max:255',
            'post_code' => 'nullable|string|max:20',
            'address' => 'nullable|string|max:255',
            'nick_name' => 'nullable|string|max:255|unique:freelancers,nick_name,' . $this->route('freelancer'), // Verifica si ya existe el nick_name
            'description' => 'nullable|string',
            'display_name' => 'nullable|string|max:255',
            'country_origin' => 'nullable|string|max:255',
            'country_residence' => 'nullable|string|max:255',
            'cover' => 'nullable|string', // O si es una imagen, puedes agregar una validación de imagen
            'video' => 'nullable|string', // Si el video es un enlace
        ];
    }
}
