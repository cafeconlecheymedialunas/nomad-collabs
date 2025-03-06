<?php
namespace App\Http\Controllers;

use App\Http\Requests\StoreJobexperienceRequest;
use App\Http\Requests\UpdateJobexperienceRequest;
use App\Models\Freelancer;
use App\Models\Jobexperience;
use Illuminate\Http\Request;
use Inertia\Inertia;

class JobexperienceController extends Controller
{
    /**
     * Guardar una nueva educación.
     */
    public function store(StoreJobexperienceRequest $request, Freelancer $freelancer)
    {

        $freelancer->jobexperiences()->create($request->validated());

        return redirect()->route('freelancer.edit', $freelancer->id)
                         ->with('success', 'Educación creada exitosamente.');
    }

    /**
     * Actualizar una educación existente.
     */
    public function update(UpdateJobexperienceRequest $request, Freelancer $freelancer, Jobexperience $jobexperience)
    {

      
        $job = $jobexperience->update($request->validated());

        return redirect()->route('freelancer.edit', $freelancer->id)->with('success', 'Jobexperience updated successfully.');
    }

    /**
     * Eliminar una educación.
     */
    public function destroy(Freelancer $freelancer, Jobexperience $jobexperience)
    {

        $jobexperience->delete();

        return redirect()->route('freelancer.edit', $freelancer->id)->with('success', 'Jobexperience removed successfully.');
    }
}
