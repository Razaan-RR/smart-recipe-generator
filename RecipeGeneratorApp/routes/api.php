<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AIRecipeController;
use App\Http\Controllers\SavedRecipeController;


Route::post('/generate-recipe', [AIRecipeController::class, 'generateRecipe']);

Route::post('/save-recipe', [SavedRecipeController::class, 'store']);
Route::get('/saved-recipes', [SavedRecipeController::class, 'index']);
