<?php
namespace App\Http\Controllers;

use App\Models\Freelancer;
use App\Models\Education;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EducationController extends Controller
{
   

    /**
     * Guardar una nueva educación.
     */
    public function store(Request $request, Freelancer $freelancer)
    {
        $validatedData = $request->validate([
            'type' => 'required|string|max:255',
            'institution' => 'required|string|max:255',
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'finish' => 'required|boolean',
        ]);

        $freelancer->educations()->create($validatedData);

        return redirect()->route('freelancer.education.index', $freelancer->id)->with('success', 'Education created successfully.');
    }

 
    /**
     * Actualizar una educación existente.
     */
    public function update(Request $request, Freelancer $freelancer)
    {
        $validatedData = $request->validate([
            'education.id' => 'required|exists:educations,id', // Asegurar que el ID exista
            'education.type' => 'sometimes|string|max:255', // "sometimes" para validar solo si está presente
            'education.institution' => 'sometimes|string|max:255',
            'education.title' => 'sometimes|string|max:255',
            'education.description' => 'sometimes|string',
            'education.finish' => 'sometimes|boolean',
        ]);
    
        // Buscar el education por ID
        $education = Education::find($validatedData['education']['id']);
    
        // Actualizar el education
        if ($education) {
            $education->update($validatedData['education']);
        }
    
        return redirect()->route('freelancer.education.index', $freelancer->id)->with('success', 'Education updated successfully.');
    }

    /**
     * Eliminar una educación.
     */
    public function destroy(Freelancer $freelancer, Education $education)
    {
        $education->delete();
        return redirect()->route('freelancer.education.index', $freelancer->id)->with('success', 'Education deleted successfully.');
    }
}