<?php

namespace App\Http\Middleware;

use Closure;
use Cookie;
use Crypt;

class UserInformationCookie
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {

        $server = isset($_SERVER['HTTP_REFERER']) && !empty($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : null;
        $cookie = $request->cookie('referrer');

        if ($request->cookie('location')) {
            $data = Crypt::decrypt($request->cookie('location'));
            if ($data['ip'] != $_SERVER['REMOTE_ADDR']) {
                $geoip = geoip()->getLocation($_SERVER['REMOTE_ADDR']);
                Cookie::queue('location', ['ip' => $_SERVER['REMOTE_ADDR'], 'country' => $geoip->country, 'city' => $geoip->city, 'state' => $geoip->state_name], 2628000);
            }
        } else {
            $geoip = geoip()->getLocation($_SERVER['REMOTE_ADDR']);
            Cookie::queue('location', ['ip' => $_SERVER['REMOTE_ADDR'], 'country' => $geoip->country, 'city' => $geoip->city, 'state' => $geoip->state_name], 2628000);
        }

        if (!is_null($server) && is_null($cookie)) {
            //dd($server);
            Cookie::queue('referrer', $server, 2628000);
        } else {
            //dd($server);
            //dd(Crypt::decrypt($cookie));
        }

        return $next($request);
    }
}
