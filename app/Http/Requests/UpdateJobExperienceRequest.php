<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateJobexperienceRequest extends FormRequest
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
            'title' => 'sometimes|string|max:255',
            'type' => 'sometimes|string|max:255',
            'company' => 'sometimes|string|max:255',
            'location' => 'sometimes|string|max:255',
            'init_at' => 'sometimes|date',
            'finish_at' => 'nullable|date|after_or_equal:init_at',
            'description' => 'nullable|string',
            'current' => 'sometimes|boolean',
        ];
    }
}
