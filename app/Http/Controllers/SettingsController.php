<?php

namespace App\Http\Controllers;

use App\User;
use Hash;
use Illuminate\Http\Request;

class SettingsController extends Controller
{
    public function show()
    {
        return view('home.settings');
    }

    public function master(Request $request)
    {
        $this->validate($request, [
            'old_password' => 'required|min:6|max:255',
            'password' => 'required|min:6|max:255|confirmed',
        ]);
        $data = $request->only('old_password', 'password');
        $user = User::find(auth()->user()->id);
        if(Hash::check($data['old_password'], $user->password)) {
            $user->password = bcrypt($data['password']);
            $user->save();
            return redirect('/home/settings')->with('success', true);
        }
        return redirect('/home/settings')->with('success', false);
    }

    public function slave(Request $request)
    {
        $this->validate($request, [
            'old_slave_password' => 'required|min:6|max:255',
            'slave_password' => 'required|min:6|max:255|confirmed',
        ]);
        $data = $request->only('old_slave_password', 'slave_password');
        $user = User::find(auth()->user()->id);
        if(Hash::check($data['old_slave_password'], $user->guest_password)) {
            $user->password = bcrypt($data['slave_password']);
            $user->save();
            return redirect('/home/settings')->with('success_slave', true);
        }
        return redirect('/home/settings')->with('success_slave', false);
    }
}
