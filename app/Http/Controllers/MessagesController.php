<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MessagesController extends Controller
{
    function __construct()
    {
        $this->middleware('auth');
    }

    public function show()
    {
        return view('messages');
    }
}
