<?php

namespace App\Http\Controllers;

use App\Models\Number;
use Illuminate\Http\Request;

class NumberController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $numbers = Number::all();
        return response()->json($numbers);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'number' => 'required|unique:numbers',
        ]);

        $number = Number::create($request->all());

        return response()->json($number, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Number $number)
    {
        // return response()->json($number);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Number $number)
    {
        // $request->validate([
        //     'number' => 'required|unique:numbers,number,' . $number->id,
        // ]);

        // $number->update($request->all());

        // return response()->json($number);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Number $number)
    {
        // $number->delete();

        // return response()->json(null, 204);
    }
}
