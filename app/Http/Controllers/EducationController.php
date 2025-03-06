<?php
namespace App\Http\Controllers;

use App\Http\Requests\StoreEducationRequest;
use App\Http\Requests\UpdateEducationRequest;
use App\Models\Freelancer;
use App\Models\Education;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EducationController extends Controller
{
    /**
     * Guardar una nueva educación.
     */
    public function store(StoreEducationRequest $request, Freelancer $freelancer)
    {

        $freelancer->educations()->create($request->validated());

        return redirect()->route('freelancer.edit', $freelancer->id)
                         ->with('success', 'Educación creada exitosamente.');
    }

    /**
     * Actualizar una educación existente.
     */
    public function update(UpdateEducationRequest $request, Freelancer $freelancer, Education $education)
    {

        $education->update($request->validated());

        return redirect()->route('freelancer.edit', $freelancer->id)->with('success', 'Education updated successfully.');
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

        return redirect()->route('freelancer.edit', $freelancer->id)->with('success', 'Education removed successfully.');
    }
}
