<?php

namespace App\Http\Controllers;

use App\Interest;
use Illuminate\Http\Request;
use App\Mail\InterestNotice;
use Mail;

class WelcomeController extends Controller
{
    public function show()
    {
        return view('welcome');
    }

    public function storeInterest(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|min:3|max:255',
            'email' => 'required|email|min:3|max:255',
            'phone' => 'required|numeric'
        ]);

        $data = $request->only('name', 'email', 'phone', 'message');

        $interest = Interest::create($data);

        if($interest) {

            Mail::to('marko@marefx.com')->send(new InterestNotice($data));

            return view('welcome');
        }
        return abort(404);
    }
}
