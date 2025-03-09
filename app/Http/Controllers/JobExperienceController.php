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
    public function store(StoreJobexperienceRequest $request, Freelancer $freelancer,JobExperience $job_experience )
    {

        $job_experience->create($request->validated());

        return redirect()->route('freelancer.edit', $freelancer->id)
                         ->with('success', 'Educación creada exitosamente.');
    }

    /**
     * Actualizar una educación existente.
     */
    public function update(UpdateJobexperienceRequest $request, Freelancer $freelancer, Jobexperience $job_experience)
    {

        $job_experience->update($request->validated());

        return redirect()->route('freelancer.edit', $freelancer->id)->with('success', 'Jobexperience updated successfully.');
    }

    /**
     * Eliminar una educación.
     */
    public function destroy(Freelancer $freelancer, Jobexperience $job_experience)
    {

        $job_experience->delete();

        return redirect()->route('freelancer.edit', $freelancer->id)->with('success', 'Jobexperience removed successfully.');
    }
}
