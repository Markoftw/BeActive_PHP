<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ApplicationController extends Controller
{
    public function show()
    {
        return view('mobile_application');
    }
}
