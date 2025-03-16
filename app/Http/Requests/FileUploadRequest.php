<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class FileUploadRequest extends FormRequest
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
       
        $fileType = $this->input('file_mime_type'); // Recibir el tipo de archivo (image, video, text)

        // Validación de tipos MIME permitidos
        $mimeTypes = [
            'image' => 'jpg,jpeg,png,gif',
            'video' => 'mp4,avi,mkv',
            'text' => 'txt,pdf,docx',
        ];

        // Verificar que el file_type sea válido
        if (!array_key_exists($fileType, $mimeTypes)) {
            abort(400, 'Invalid file type');
        }

        return [
            'file' => 'required|file|mimes:' . $mimeTypes[$fileType], // Validar según el tipo recibido
        ];
    }
}
