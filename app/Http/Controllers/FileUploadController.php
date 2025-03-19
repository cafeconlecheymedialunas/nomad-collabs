<?php

namespace App\Http\Controllers;

use App\Http\Requests\AssignFileUploadedToEntityRequest;
use Illuminate\Http\Request;
use App\Models\File;
use App\Models\Fileable;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class FileUploadController extends Controller
{
    // 📌 Subir archivo
    public function upload(Request $request)
    {
        // Obtener el array de mime_file_type desde el frontend
        $mimeFileTypes = $request->input('file_mime_type'); // Este array es algo como ["image"]

        // Los tipos MIME permitidos para imágenes, videos y texto
        $validMimeTypes = [
            'image' => ['jpeg', 'png', 'gif'],
            'video' => ['mp4', 'avi', 'mkv'],
            'text'  => ['plain', 'pdf', 'msword'],
        ];


        // Crear un array con todos los tipos MIME permitidos según lo que se envió desde el frontend
        $allowedMimeTypes = [];
        foreach ($mimeFileTypes as $type) {
            // Si el tipo está en la lista de tipos válidos
            if (array_key_exists($type, $validMimeTypes)) {
                // Merge los tipos de MIME correspondientes
                $allowedMimeTypes = array_merge($allowedMimeTypes, $validMimeTypes[$type]);
            }
        }


        // Asegurarse de que el archivo subido sea uno de los tipos permitidos
        // Este paso es crítico: asegurarse de que los tipos MIME estén correctamente validados
        $request->validate([
            'file' => 'sometimes|file|mimes:' . implode(',', $allowedMimeTypes),
            'alt'  => 'nullable|string|max:255',
        ]);

        // Obtener el archivo
        $file = $request->file('file');

        // Intentar guardar el archivo
        $path = $file->store('uploads', 'public');

        // Verificar si el archivo se subió correctamente
        if (empty($path)) {
            return back()->with('error', 'Error al guardar el archivo.');
        }

        // Crear la entrada en la base de datos
        File::create([
            'user_id'   => Auth::id(),
            'path'      => $path,
            'name'      => $file->getClientOriginalName(),
            'mime_type' => $file->getMimeType(),
            'alt'       => $request->input('alt'),
        ]);

        // Retornar mensaje de éxito
        return back()->with('success', 'Archivo subido correctamente.');
    }






    // 📌 Listar imágenes del usuario autenticado
    public function index()
    {
        return response()->json(File::where('user_id', Auth::id())->get());
    }

    // 📌 Eliminar archivo
    public function destroy(File $file)
    {
        Storage::disk('public')->delete($file->path);
        $file->delete();

        return back()->with('success', 'File uploaded successfully!');
    }
    public function assignFileToEntity(AssignFileUploadedToEntityRequest $request)
    {
        // Buscar el archivo
        $file = File::findOrFail($request->input("file_id"));

        // Construir la clase del modelo
        $modelClass = "App\\Models\\" . $request->input("fileable_type");

        // Verificar si la clase existe antes de intentar instanciarla
        if (!class_exists($modelClass)) {
            return back()->with('error', 'Class Not Found');
        }

        // Buscar la entidad
        $entity = $modelClass::findOrFail($request->fileable_id);

        // Asociar el archivo a la entidad dentro de una transacción
        try {
            DB::transaction(function () use ($entity, $file, $request, $modelClass) {
                // Eliminar archivos previos del mismo tipo asociados a la entidad
                Fileable::where('fileable_id', $entity->id)
                    ->where('fileable_type', $modelClass)
                    ->where('type', $request->type)
                    ->delete();

                // Asignar el nuevo archivo
                Fileable::create([
                    "file_id" => $file->id,
                    "fileable_id" => $entity->id,
                    "fileable_type" => $modelClass,
                    "type" => $request->type
                ]);
            });

            return back()->with('success', 'Successful file assigned');
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Ocurrió un error al asignar el archivo.'
            ], 500);
        }
    }

    public function updateFile(Request $request, File $file)
    {
        // Validación de los datos
        $validated = $request->validate([
            'name' => 'nullable|string|max:255',
            'alt' => 'nullable|string|max:255',
        ]);


        // Si se sube un nuevo archivo
        if ($request->hasFile('file')) {
            // Eliminar el archivo anterior del almacenamiento
            if (Storage::exists($file->path)) {
                Storage::delete($file->path);
            }

            // Subir el nuevo archivo
            $newFile = $request->file('file');
            $path = $newFile->store('uploads', 'public');

            // Actualizar el path y mime_type del archivo
            $file->path = $path;
            $file->mime_type = $newFile->getMimeType();
        }

        // Actualizar el nombre y alt text (si se proporcionan nuevos valores)
        $file->name = $request->input('name', $file->name);
        $file->alt = $request->input('alt', $file->alt);

        // Guardar los cambios
        $file->save();

        // Devolver respuesta exitosa
        return response()->json([
            'message' => 'Archivo actualizado con éxito',
            'file' => $file
        ]);
    }
}
