<?php

namespace App\Http\Controllers;

use App\Models\Freelancer;
use App\Http\Requests\UpdateFreelancerRequest;
use App\Models\File;
use App\Models\Skill;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FreelancerController extends Controller
{
    /**
     * Muestra la información del freelancer.
     */
    public function show($id)
    {
        $freelancer = Freelancer::findOrFail($id);

        return Inertia::render('Freelancer/Show', [
            'freelancer' => $freelancer,
        ]);
    }

    /**
     * Muestra el formulario de edición para el freelancer.
     */
    public function edit(Freelancer $freelancer)
    {


        return Inertia::render('Profile/Edit', [
            'freelancer' => $freelancer->load(["user.files","educations","jobExperiences","skillLevels.skill","files","cover"]),
            "skills" => Skill::all()
        ]);
    }

    /**
     * Actualiza la información del freelancer.
     */
    public function update(UpdateFreelancerRequest $request, Freelancer $freelancer)
    {
        // Actualiza el freelancer con los datos validados
      
        $freelancer->update($request->validated());

        
        if ($request->hasFile('cover')) {
            $coverImageFile = $request->file('cover');
            $coverImagePath = $coverImageFile->store('cover_images', 'public');
            $coverImage = File::create([
                'path' => $coverImagePath,
                'name' => $coverImageFile->getClientOriginalName(),
                'mime_type' => $coverImageFile->getMimeType(),
            ]);
            
            // Desvincular el antiguo archivo de portada (si existe) y asociar el nuevo
            $freelancer->coverImage()->delete();
            $freelancer->coverImage()->save($coverImage);
        }

        // Subir el video (si se proporciona)
        if ($request->hasFile('video')) {
            $videoFile = $request->file('video');
            $videoPath = $videoFile->store('videos', 'public');
            $video = File::create([
                'path' => $videoPath,
                'name' => $videoFile->getClientOriginalName(),
                'mime_type' => $videoFile->getMimeType(),
            ]);
            
            // Desvincular el antiguo video (si existe) y asociar el nuevo
            $freelancer->video()->delete();
            $freelancer->video()->save($video);
        }

        // Subir y asociar archivos para la galería (si se proporcionan)
        if ($request->hasFile('gallery')) {
            // Eliminar todos los archivos previos de la galería
            $freelancer->gallery()->delete();
            
            $galleryFiles = [];
            foreach ($request->file('gallery') as $galleryFile) {
                $galleryPath = $galleryFile->store('gallery', 'public');
                $galleryFileModel = File::create([
                    'path' => $galleryPath,
                    'name' => $galleryFile->getClientOriginalName(),
                    'mime_type' => $galleryFile->getMimeType(),
                ]);
                $galleryFiles[] = $galleryFileModel;
            }

            // Asociar los archivos nuevos a la galería
            $freelancer->gallery()->saveMany($galleryFiles);
        }

        return redirect()->route('freelancer.edit', $freelancer->id)
            ->with('success', 'Perfil actualizado correctamente');
    }

    /**
     * Elimina el freelancer.
     */
    public function destroy($id)
    {
        $freelancer = Freelancer::findOrFail($id);


        $freelancer->delete();

        return redirect()->route('freelancer.index')
            ->with('success', 'Perfil eliminado correctamente');
    }
}
