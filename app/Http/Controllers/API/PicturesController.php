<?php

namespace App\Http\Controllers\API;

use App\Upload;
use Illuminate\Http\Request;
use Storage;
use App\Http\Controllers\Controller;
use JWTAuth;

class PicturesController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth', ['only' => ['getAll', 'images', 'manage', 'delete']]);
    }

    public function getAll()
    {
        $images = auth()->user()->uploads()->get();
        if($images) {
            return view('gallery')->with(['images' => $images]);
        }
        return abort(404);
    }

    public function images($filename)
    {
        $user = auth()->user()->id;

        $path = "pictures/" . $user . "/" . $filename;
        if (!Storage::exists($path)) abort(404);

        return response(Storage::get($path), 200)->header('Content-Type', 'image/jpeg');
    }

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
        $file_name = $file_name_explode[$num_explode - 1];

        //$exists = Storage::disk('uploads')->exists("pictures/".$user_id."/" . $file_name);
        $exists = Storage::exists("pictures/" . $user_id . "/" . $file_name);

        if (!$exists) {
            auth()->user()->upload(
                new Upload(['name' => $file_name])
            );

            //Storage::disk('uploads')->put("pictures/".$user_id."/" . $file_name, $decode);
            Storage::put("pictures/" . $user_id . "/" . $file_name, $decode);

            return $request->only('name');
        }

        return ['file_already_exists' => true];
    }

    public function manage()
    {
        $images = auth()->user()->uploads()->get();
        if($images) {
            return view('gallery_manage')->with(['images' => $images]);
        }
        return abort(404);
    }

    public function delete()
    {
        return back();
    }
}
