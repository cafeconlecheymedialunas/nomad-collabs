<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateEducationRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'freelancer_id' => 'sometimes|exists:freelancers,id', 
            'init_at' => 'sometimes|date', 
            'finish_at' => 'nullable|date|after_or_equal:init_at', 
            'type' => 'sometimes|string|max:255',
            'institution' => 'sometimes|string|max:255',
            'title' => 'sometimes|string|max:255',
            'description' => 'nullable|string', 
            'finished' => 'sometimes|boolean', 
        ];
    }
}
