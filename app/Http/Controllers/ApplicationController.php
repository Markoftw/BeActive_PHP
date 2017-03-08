<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ApplicationController extends Controller
{
    function __construct()
    {
        $this->middleware('auth');
    }

    public function show()
    {
        return view('home.mobile_application');
    }

    public function report()
    {
        
    }

    public function createReport()
    {

    }
}
