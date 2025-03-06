<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreBuyerRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true; // Puedes agregar una lógica de autorización si es necesario
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'user_id' => 'required|exists:users,id',
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'state' => 'nullable|string|max:255',
            'city' => 'nullable|string|max:255',
            'post_code' => 'nullable|string|max:10',
            'address' => 'nullable|string|max:255',
            'nick_name' => 'required|string|max:255|unique:buyers,nick_name',
            'description' => 'nullable|string',
            'display_name' => 'required|string|max:255',
            'country_origin' => 'required|string|max:255',
            'country_residence' => 'required|string|max:255',
            'cover' => 'nullable|url',
            'company_name' => 'nullable|string|max:255',
            'company_state' => 'nullable|string|max:255',
            'company_city' => 'nullable|string|max:255',
            'company_post_code' => 'nullable|string|max:10',
            'company_address' => 'nullable|string|max:255',
            'company_country' => 'nullable|string|max:255',
            'buyer_type' => 'required|in:company,individual',
            'account_active' => 'nullable|boolean',
        ];
    }
}
