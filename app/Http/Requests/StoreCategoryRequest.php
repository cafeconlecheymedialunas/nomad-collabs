<?php

// app/Http/Requests/StoreCategoryRequest.php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreCategoryRequest extends FormRequest
{
    public function authorize()
    {
        return true; 
    }

    public function rules()
    {
        return [
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'slug' => 'nullable|string|unique:categories,slug',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'service_id' => 'required|exists:services,id', 
        ];
    }
}
