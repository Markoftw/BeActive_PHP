<?php

namespace App\Http\Controllers\Auth;

use App\User;
use Auth;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Tymon\JWTAuth\Exceptions\JWTException;
use JWTAuth;

class ApiController extends Controller
{
    public function __construct()
    {
        //$this->middleware('guest', ['except' => 'logout']);
    }

    protected function guard()
    {
        return Auth::guard('api');
    }

    public function login(Request $request)
    {
        /*$credentials = $request->only('username', 'password');

        $results = ['success' => true, 'username' => $credentials['username'], 'password' => $credentials['password']];

        return response($results, 200);*/


        // grab credentials from the request
        $credentials = $request->only('email', 'password');

        //$user = User::where('email', $credentials['email'])->first();

        try {
            // attempt to verify the credentials and create a token for the user
            if (! $token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'invalid_credentials'], 401);
            }
        } catch (JWTException $e) {
            // something went wrong whilst attempting to encode the token
            return response()->json(['error' => 'could_not_create_token'], 500);
        }

        $user = Auth::user();

        // all good so return the token
        return response()->json(['success' => true, 'username'=> $user->name, 'token' => $token]);
    }

    public function getData()
    {
        return ['test' => true];
    }

}
