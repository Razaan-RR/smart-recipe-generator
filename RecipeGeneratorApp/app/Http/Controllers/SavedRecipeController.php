<?php

namespace App\Http\Controllers;

use App\Models\SavedRecipe;
use Illuminate\Http\Request;

class SavedRecipeController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'ingredients' => 'required|string',
            'recipe' => 'required|string',
        ]);

        $saved = SavedRecipe::create([
            'ingredients' => $request->ingredients,
            'recipe' => $request->recipe,
        ]);

        return response()->json(['message' => 'Recipe saved successfully', 'id' => $saved->id]);
    }

    public function index()
    {
        return response()->json(SavedRecipe::latest()->get());
    }
}

