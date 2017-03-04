<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PicturesController extends Controller
{
    public function show()
    {
        $images = auth()->user()->uploads()->get();
        if($images) {
            return view('pictures')->with(['images' => $images]);
        }
        return abort(404);
    }

    public function upload()
    {

    }

    public function create()
    {

    }
}
