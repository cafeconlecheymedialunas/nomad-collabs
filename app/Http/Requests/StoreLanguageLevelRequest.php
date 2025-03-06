<?php
// app/Http/Requests/StoreLanguageLevelRequest.php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreLanguageLevelRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'language' => 'required|string|max:255',
            'level' => 'required|string|in:beginner,intermediate,advanced,fluent',
            'can_work' => 'required|boolean',
            'language_id' => 'required|exists:languages,id',
            'user_id' => 'required|exists:users,id',
        ];
    }
}

