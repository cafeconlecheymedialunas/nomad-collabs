<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreFreelancerRequest;
use App\Models\Freelancer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class FreelancerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $freelancers = Freelancer::all();
        return Inertia::render('Profile/Index', [
            "freelancers" => $freelancers,
            "auth" => auth()->user()

        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Profile/Create', ["user" => auth()->user()]);
    }



    public function store(StoreFreelancerRequest $request)
    {

        $data = $request->validated();

        if ($request->hasFile('cover')) {
            $coverPath = $request->file('cover')->store('covers', 'public');
            $data['cover'] = $coverPath;
        }

        $freelancer = Freelancer::create($data);

        // Redirigir al perfil del freelancer con un mensaje de éxito
        return redirect()->route('freelancer.edit', $freelancer->id)
            ->with('success', 'Freelancer profile created successfully!');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Freelancer $freelancer)
    {
       $freelancer = $freelancer->load(["educations","jobExperiences","educations","user"]);

        return Inertia::render(
            'Profile/Edit',
            [
                "user" => auth()->user(),
                "freelancer" => $freelancer
            ]
        );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Freelancer $freelancer)
    {
        $validatedData = $request->validate([
            'user_id' => 'required|exists:users,id',
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'state' => 'required|string|max:255',
            'city' => 'nullable|string|max:255',
            'post_code' => 'nullable|string|max:20',
            'address' => 'nullable|string|max:255',
            'nick_name' => 'required|string|max:255|unique:freelancers,nick_name,' . $freelancer->id, // Ignorar el nick_name actual
            'description' => 'required|string',
            'display_name' => 'required|string|max:255',
            'country_origin' => 'required|string|max:255',
            'country_residence' => 'required|string|max:255',
            'video' => 'nullable|url',
            'cover' => 'nullable|url',
        ]);

        // Buscar el freelancer por su ID


        // Actualizar el freelancer con los datos validados
        $freelancer->update($validatedData);

        // Redirigir con un mensaje de éxito
        return redirect()->route('freelancer.edit', $freelancer->id)->with('success', 'Freelancer updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
