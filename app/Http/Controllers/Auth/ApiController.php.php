<?php

namespace App\Http\Controllers\Auth;

use Auth;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ApiController extends Controller
{
    public function __construct()
    {
        $this->middleware('guest', ['except' => 'logout']);
    }

    public function login(Request $request)
    {
        $credentials = $request->only('username', 'password');

        $results = ['success' => true, 'username' => $credentials['username'], 'password' => $credentials['password']];

        return response($results, 200);
    }

}
