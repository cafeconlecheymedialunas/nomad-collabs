<?php
// app/Http/Requests/StoreServiceRequest.php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreServiceRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'freelancer_id' => 'required|exists:freelancers,id', 
            'category_id' => 'required|exists:categories,id', 
            'skill_id' => 'required|exists:skills,id',
            'tag_id' => 'required|exists:tags,id',
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'active' => 'boolean', 
        ];
    }
}
