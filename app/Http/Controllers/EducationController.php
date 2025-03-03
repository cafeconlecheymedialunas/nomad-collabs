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
            'description' => 'nullable|string',
            'finish' => 'required|boolean',
            'init_at' => 'required|date', // Valida la fecha de inicio
            'finish_at' => 'nullable|date|after_or_equal:init_at', // Valida la fecha de fin, si existe
        ]);

        // Crear el registro de educación asociado al freelancer
        $education = $freelancer->educations()->create($validatedData);

        // Devolver la respuesta Inertia con la nueva educación
        return Inertia::render('Profile/Edit', [
            'freelancer' => $freelancer,
            'educations' => $freelancer->educations,
            'success' => 'Education created successfully.'
        ]);
    }

    /**
     * Actualizar una educación existente.
     */
    public function update(Request $request, Freelancer $freelancer, Education $education)
    {
        $validatedData = $request->validate([
            'type' => 'sometimes|string|max:255',
            'institution' => 'sometimes|string|max:255',
            'title' => 'sometimes|string|max:255',
            'description' => 'sometimes|string',
            'finish' => 'sometimes|boolean',
            'init_at' => 'sometimes|date',
            'finish_at' => 'nullable|date|after_or_equal:init_at', // Valida la fecha de fin
        ]);

        // Actualizar el registro de educación
        $education->update($validatedData);

        // Devolver la respuesta Inertia con la lista de educaciones actualizada
        return Inertia::render('Profile/Edit', [
            'freelancer' => $freelancer,
            'educations' => $freelancer->educations,
            'success' => 'Education updated successfully.'
        ]);
    }

    /**
     * Eliminar una educación.
     */
    public function destroy(Freelancer $freelancer, Education $education)
    {
        if ($education->freelancer_id !== $freelancer->id) {
            return redirect()->route('freelancer.education.index', $freelancer->id)
                ->with('error', 'Unauthorized action.');
        }

        $education->delete();

        return Inertia::render('Profile/Edit', [
            'freelancer' => $freelancer,
            'educations' => $freelancer->educations,
            'success' => 'Education deleted successfully.'
        ]);
    }
}
