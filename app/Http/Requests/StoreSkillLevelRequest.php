<?php


namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreSkillLevelRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'freelancer_id' => 'required|exists:freelancers,id',
            'skill_id' => 'required|exists:skills,id',
            'level' => 'required|integer|between:1,10',
        ];
    }
}

