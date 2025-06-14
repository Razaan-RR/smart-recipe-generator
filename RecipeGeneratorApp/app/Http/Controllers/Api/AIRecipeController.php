<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class AIRecipeController extends Controller
{
    public function generateRecipe(Request $request)
    {
        $ingredients = $request->input('ingredients');

        $response = Http::withHeaders([
            'Authorization' => 'Bearer ' . env('OPENROUTER_API_KEY'),
            'HTTP-Referer' => 'http://localhost', // Optional but recommended
            'X-Title' => 'Smart Recipe Generator',
        ])->post('https://openrouter.ai/api/v1/chat/completions', [
            'model' => 'openai/gpt-3.5-turbo', // or try 'google/gemini-pro' or 'mistral/mistral-7b-instruct'
            'messages' => [
                [
                    'role' => 'user',
                    'content' => "Give me a recipe using these ingredients: $ingredients",
                ],
            ],
        ]);

        $data = $response->json();

        return response()->json([
            'recipe' => $data['choices'][0]['message']['content'] ?? 'No recipe generated.',
        ]);
    }
}
