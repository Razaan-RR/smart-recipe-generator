<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SavedRecipe extends Model
{
    protected $fillable = ['ingredients', 'recipe'];
}
