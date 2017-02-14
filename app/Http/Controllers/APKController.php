<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Storage;

class APKController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
    }

    public function showAll()
    {
        $files = Storage::files('apks');
        $cleared = [];
        foreach ($files as $file) {
            array_push($cleared, str_replace('apks/', '', $file));
        }

        return view('apklisting')->with(['files' => $cleared]);
    }

    public function createDirectory()
    {
        $directory = 'apks';

        $storage = Storage::makeDirectory($directory);

        if($storage) {
            return view('home');
        }
    }

    public function download($filename)
    {
        if(Storage::exists('apks/' . $filename)) {
            //Storage::get('apks/' . $filename);
            $headers = [
                'Content-Type'=>'application/vnd.android.package-archive'
            ];
            return response()->download('/var/www/html/beactive/storage/app/apks/' . $filename, $filename, $headers);
        } else {
            return view('apklisting');
        }
    }

}
