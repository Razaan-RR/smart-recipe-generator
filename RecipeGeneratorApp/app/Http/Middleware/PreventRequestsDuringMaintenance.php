<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpKernel\Exception\HttpException;

class PreventRequestsDuringMaintenance
{
    /**
     * Handle an incoming request.
     */
    public function handle(Request $request, Closure $next)
    {
        if (app()->isDownForMaintenance()) {
            throw new HttpException(503, 'The application is in maintenance mode.');
        }

        return $next($request);
    }
}
