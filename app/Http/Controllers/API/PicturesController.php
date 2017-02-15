<?php

namespace App\Http\Controllers\API;

use App\Upload;
use Illuminate\Http\Request;
use Storage;
use App\Http\Controllers\Controller;
use JWTAuth;

class PicturesController extends Controller
{
    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
            'image' => 'required'
        ]);

        $user_id = JWTAuth::parseToken()->authenticate()->id;
        $data = $request->only('name', 'image');
        $decode = base64_decode($data['image']);
        $file_name_explode = explode('/', $data['name']);
        $num_explode = count($file_name_explode);
        $file_name = $file_name_explode[$num_explode-1];

        $exists = Storage::exists("pictures/".$user_id."/" . $file_name);

        if(!$exists) {
            auth()->user()->upload(
                new Upload(['name' => $file_name])
            );

            Storage::put("pictures/".$user_id."/" . $file_name, $decode);

            return $request->only('name');
        }

        return ['file_already_exists' => true];
    }
}
