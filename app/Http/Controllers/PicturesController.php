<?php

namespace App\Http\Controllers;

use App\Upload;
use Illuminate\Http\Request;
use Storage;

class PicturesController extends Controller
{
    function __construct()
    {
        $this->middleware('auth');
    }

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
        return view('pictures_upload');
    }

    public function create(Request $request)
    {
        $this->validate($request, [
            'photo' => 'required',
            'opis' => 'required'
        ]);

        $data = $request->only('image', 'opis');

        $image_name = $this->generateRandomString() . "." . $request->photo->extension();

        $user_id = auth()->user()->id;

        //$exists = Storage::disk('uploads')->exists("pictures/".$user_id."/" . $file_name);
        $exists = Storage::exists("pictures/" . $user_id . "/" . $image_name);

        if (!$exists) {
            auth()->user()->upload(
                new Upload(['name' => $image_name, 'opis' => $data['opis']])
            );

            //Storage::disk('uploads')->put("pictures/".$user_id."/" . $file_name, $decode);
            //Storage::put("pictures/" . $user_id . "/" . $image_name, $decode);
            $storage = $request->photo->storeAs("pictures/" . $user_id, $image_name);

            return $this->show();
        }

        return $this->show();
    }

    private function generateRandomString($length = 30) {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }
        return $randomString;
    }

    public function edit($id)
    {
        $upload = Upload::find($id);

        if(count($upload)) {
            return view('pictures_edit')->with('upload', $upload);
        }

        return abort(404);
    }

    public function postEdit(Request $request, $id)
    {
        $upload = Upload::find($id);
        $data = $request->only('opis');
        if(count($upload)) {
            $upload->opis = $data['opis'];
            $upload->save();
        }

        $images = auth()->user()->uploads()->get();
        if($images) {
            return view('pictures')->with(['images' => $images]);
        }
    }
}
