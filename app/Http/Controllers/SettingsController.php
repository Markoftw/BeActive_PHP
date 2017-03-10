<?php

namespace App\Http\Controllers;

use App\User;
use Hash;
use Illuminate\Http\Request;

class SettingsController extends Controller
{
    public function show()
    {
        $company = is_null(auth()->user()->company) ? '' : auth()->user()->company;
        $mail = auth()->user()->notify_email;
        return view('home.settings')->with('company', $company)->with('mail', $mail);
    }

    public function master(Request $request)
    {
        $this->validate($request, [
            'old_password' => 'required|min:6|max:255',
            'password' => 'required|min:6|max:255|confirmed',
        ]);
        $data = $request->only('old_password', 'password');
        $user = User::find(auth()->user()->id);
        $company = is_null(auth()->user()->company) ? '' : auth()->user()->company;
        $mail = auth()->user()->notify_email;
        if(Hash::check($data['old_password'], $user->password)) {
            $user->password = bcrypt($data['password']);
            $user->save();
            return redirect('/home/settings')->with('success', true)->with('company', $company)->with('mail', $mail);
        }
        return redirect('/home/settings')->with('success', false)->with('company', $company)->with('mail', $mail);
    }

    public function slave(Request $request)
    {
        $this->validate($request, [
            'old_slave_password' => 'required|min:6|max:255',
            'slave_password' => 'required|min:6|max:255|confirmed',
        ]);
        $data = $request->only('old_slave_password', 'slave_password');
        $user = User::find(auth()->user()->id);
        $company = is_null(auth()->user()->company) ? '' : auth()->user()->company;
        $mail = auth()->user()->notify_email;
        if(Hash::check($data['old_slave_password'], $user->guest_password)) {
            $user->password = bcrypt($data['slave_password']);
            $user->save();
            return redirect('/home/settings')->with('success_slave', true)->with('company', $company)->with('mail', $mail);
        }
        return redirect('/home/settings')->with('success_slave', false)->with('company', $company)->with('mail', $mail);
    }

    public function company(Request $request)
    {
        $this->validate($request, [
            'podjetje' => 'required|min:1|max:255'
        ]);
        $data = $request->only('podjetje');
        $user = User::find(auth()->user()->id);
        $user->company = $data['podjetje'];
        $user->save();
        $company = is_null(auth()->user()->company) ? '' : auth()->user()->company;
        $mail = auth()->user()->notify_email;
        return redirect('/home/settings')->with('podjetje', true)->with('company', $company)->with('mail', $mail);
    }

    public function mail(Request $request)
    {
        $this->validate($request, [
            'mail' => 'required|min:6|max:255|email'
        ]);
        $data = $request->only('mail');
        $user = User::find(auth()->user()->id);
        $user->notify_email = $data['mail'];
        $user->save();
        $company = is_null(auth()->user()->company) ? '' : auth()->user()->company;
        $mail = auth()->user()->notify_email;
        return redirect('/home/settings')->with('posta', true)->with('company', $company)->with('mail', $mail);
    }
}
