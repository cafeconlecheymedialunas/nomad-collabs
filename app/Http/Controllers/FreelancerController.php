<?php

namespace App\Http\Controllers;

use App\Models\Freelancer;
use App\Http\Requests\UpdateFreelancerRequest;
use App\Models\Skill;
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
    public function edit($id)
    {
        $freelancer = Freelancer::findOrFail($id);

        return Inertia::render('Profile/Edit', [
            'freelancer' => $freelancer->load(["user","educations","jobExperiences","skillLevels.skill"]),
            "skills" => Skill::all()
        ]);
    }

    /**
     * Actualiza la información del freelancer.
     */
    public function update(UpdateFreelancerRequest $request, $id)
    {
        $freelancer = Freelancer::findOrFail($id);

        // Actualiza el freelancer con los datos validados
        $freelancer->update($request->validated());

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
