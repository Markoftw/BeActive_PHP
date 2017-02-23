<?php

namespace App\Http\Middleware;

use Auth;
use Closure;

class CheckUserRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if(Auth::user()->hasRole('developer') || Auth::user()->hasRole('owner') || Auth::user()->hasRole('administrator')) {
            return $next($request);
        }
        return redirect('home');
    }
}
