<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreFreelancerRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'user_id' => auth()->id(), // Agregar user_id automáticamente
        ]);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'first_name' => ['required', 'string', 'max:255'],
            'last_name' => ['required', 'string', 'max:255'],
            'state' => ['required', 'string', 'max:255'],
            'city' => ['required', 'string', 'max:255'],
            'post_code' => ['required', 'string', 'max:20'],
            'address' => ['required', 'string', 'max:255'],
            'nick_name' => ['required', 'string', 'max:255'],
            'description' => ['nullable', 'string'],
            'display_name' => ['required', 'string', 'max:255'],
            'country_origin' => ['required', 'string', 'max:255'],
            'country_residence' => ['required', 'string', 'max:255'],
            'video' => ['nullable', 'url'],
            'user_id' => ['required', 'exists:users,id'],
        ];
    }
}
