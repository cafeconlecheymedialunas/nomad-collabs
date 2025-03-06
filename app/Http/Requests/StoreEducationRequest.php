<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreEducationRequest extends FormRequest
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
            'freelancer_id' => 'required|exists:freelancers,id', 
            'init_at' => 'required|date',
            'finish_at' => 'nullable|date|after_or_equal:init_at', 
            'type' => 'required|string|max:255', 
            'institution' => 'required|string|max:255', 
            'title' => 'required|string|max:255', 
            'description' => 'nullable|string',
            'finished' => 'sometimes|boolean', 
        ];
    }
}
