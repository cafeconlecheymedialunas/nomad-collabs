<?php

namespace App\Http\Controllers;

use App\Models\Buyer;
use App\Http\Requests\BuyerRequest;
use App\Http\Requests\StoreBuyerRequest;
use Inertia\Inertia;

class BuyerController extends Controller
{
    /**
     * Mostrar una lista de los compradores.
     */
    public function index()
    {
        $buyers = Buyer::all(); // Obtener todos los compradores

        return Inertia::render('Buyers/Index', [
            'buyers' => $buyers
        ]);
    }

    /**
     * Mostrar el formulario para crear un nuevo comprador.
     */
    public function create()
    {
        return Inertia::render('Buyers/Create');
    }

    /**
     * Almacenar un nuevo comprador.
     */
    public function store(StoreBuyerRequest $request)
    {
        Buyer::create($request->validated());

        return redirect()->route('buyers.index')->with('success', 'Comprador creado correctamente.');
    }

    /**
     * Mostrar el formulario para editar un comprador específico.
     */
    public function edit(Buyer $buyer)
    {
        return Inertia::render('Buyers/Edit', [
            'buyer' => $buyer
        ]);
    }

    /**
     * Actualizar un comprador.
     */
    public function update(StoreBuyerRequest $request, Buyer $buyer)
    {
        $buyer->update($request->validated());

        return redirect()->route('buyers.index')->with('success', 'Comprador actualizado correctamente.');
    }

    /**
     * Eliminar un comprador.
     */
    public function destroy(Buyer $buyer)
    {
        $buyer->delete();

        return redirect()->route('buyers.index')->with('success', 'Comprador eliminado correctamente.');
    }
}
