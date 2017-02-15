<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use Storage;
use App\Http\Controllers\Controller;

class PicturesController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->only('name', 'image');

        $decode = base64_decode($data['image']);

        $file_name_explode = explode('/', $data['name']);
        $num_explode = count($file_name_explode);
        $file_name = $file_name_explode[$num_explode-1];

        Storage::put($file_name, $decode);

        return $request->all();
    }
}
