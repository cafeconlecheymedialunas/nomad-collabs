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
            'first_name' => 'sometimes|string|max:255',
            'last_name' => 'sometimes|string|max:255',
            'state' => 'nullable|string|max:255',
            'city' => 'nullable|string|max:255',
            'post_code' => 'nullable|string|max:255',
            'address' => 'nullable|string|max:500',
            'nick_name' => 'nullable|string|max:255',
            'description' => 'nullable|string|max:1000',
            'display_name' => 'nullable|string|max:255',
            'country_origin' => 'nullable|string|max:255',
            'country_residence' => 'nullable|string|max:255',
            'gallery' => 'nullable|array', // Si se envían imágenes de la galería
            'gallery.*' => 'image|mimes:jpg,jpeg,png,gif|max:1024', // Validación para cada imagen de la galería
        ];
    }
}
