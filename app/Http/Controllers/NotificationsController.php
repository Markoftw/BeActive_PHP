<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class NotificationsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function show()
    {
        return view('notifications');
    }

    public function broadcast(Request $request)
    {
        $this->validate($request, [
            'title' => 'required|min:2|max:25',
            'message' => 'required|min:5|max:50'
        ]);

        return view('notifications')->with('message', true);
    }
}
