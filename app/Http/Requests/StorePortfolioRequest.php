<?php
// app/Http/Requests/StorePortfolioRequest.php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePortfolioRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'freelancer_id' => 'required|exists:freelancers,id',
            'title' => 'required|string|max:255',
            'start' => 'nullable|date',
            'end' => 'nullable|date|after_or_equal:start',
            'company' => 'nullable|string|max:255',
            'country' => 'nullable|string|max:255',
            'description' => 'nullable|string',
            'current' => 'required|boolean',
        ];
    }
}

