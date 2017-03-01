<?php

namespace App\Http\Controllers\API;

use App\Device;
use App\User;
use Auth;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Tymon\JWTAuth\Exceptions\JWTException;
use JWTAuth;
use Hash;

class AuthController extends Controller
{
    public function __construct()
    {
        //$this->middleware('guest', ['except' => 'logout']);
    }

    protected function guard()
    {
        return Auth::guard('api');
    }

    public function login(Request $request)
    {
        /*$this->validate($request, [
            'device_token' => 'required',
            'name' => 'required',
            'password' => 'required'
        ]);*/

        // grab credentials from the request
        //$credentials = $request->only('email', 'password');
        $credentials = $request->only('name', 'password');
        $device_token = $request->only('device_token');
        $cred_master = ['name' => $credentials['name'], 'password' => $credentials['password']];
        try {
            $status = null;
            // attempt to verify the credentials and create a token for the user
            if (!$token = JWTAuth::attempt($cred_master)) {
                $status = "Guest";
                $user_guest = User::where('name', $credentials['name'])->get();
                if(count($user_guest)) {
                    $usr = User::find($user_guest[0]->id);
                    if(Hash::check($credentials['password'], $user_guest[0]->guest_password)) {
                        if(!$token = JWTAuth::fromUser($usr)) {
                            return response()->json(['error' => 'invalid_credentials'], 401);
                        }
                    }
                } else {
                    return response()->json(['error' => 'invalid_credentials'], 401);
                }
            }
        } catch (JWTException $e) {
            // something went wrong whilst attempting to encode the token
            return response()->json(['error' => 'could_not_create_token'], 500);
        }

        $status = (!is_null($status)) ? 'Guest' : 'Member';
        if($status == 'Member') {
            $user = Auth::user();
            $user_updater = User::find($user->id);
            $user_updater->last_online = date("Y-m-j H:i:s"); //2017-02-14 09:31:40
            $user_updater->save();

            auth()->user()->device(
                new Device(['device_type' => 'Member', 'device_token' => $device_token['device_token']])
            );
            return response()->json(['success' => true, 'username' => $user->name, 'status' => $status, 'token' => $token]);
        } else if ($status == 'Guest' && $token) {
            $user_guest = User::where('name', $credentials['name'])->get();

            $device = new Device();
            $device->user_id = $user_guest[0]->id;
            $device->device_type = 'Guest';
            $device->device_token = $device_token['device_token'];
            $device->save();

            return response()->json(['success' => true, 'username' => $user_guest[0]->name, 'status' => $status, 'token' => $token]);
        } else {
            return response()->json(['error' => 'invalid_credentials'], 401);
        }
    }

    public function getUser()
    {
        $user_id = JWTAuth::parseToken()->authenticate()->id;
        $user = User::where('id', $user_id)->first();

        if ($user) {
            $user->last_online = date("Y-m-j H:i:s"); //2017-02-14 09:31:40
            $user->save();
            return response()->json(['success' => true, 'username' => $user->name]);
        }

        return abort(404);
    }

    public function registerDevice(Request $request)
    {
        /*$this->validate($request, [
            'device_token' => 'required'
        ]);*/

        $token = $request->only('device_token');

        $exists = Device::where($token)->get();

        if (count($exists)) {
            return ['success' => true, 'status' => 'exists'];
        }

        $user_id = JWTAuth::parseToken()->authenticate()->id;
        $data = Device::where('user_id', $user_id)->get();

        if(count($data)) {
            $data = Device::where('user_id', $user_id)->update($token);
            if(count($data)) {
                return ['success' => true, 'status' => 'updated'];
            }
            return ['success' => false];
        }

        auth()->user()->device(
            new Device(['device_type' => 'admin', 'device_token' => $token['device_token']])
        );

        return ['success' => true, 'status' => 'new'];
    }

    public function deleteDevice(Request $request)
    {
        $token = $request->only('device_token');
        $deleted = Device::where($token);

        $device = $deleted->get();

        if($device[0]->user_id == JWTAuth::parseToken()->authenticate()->id) {
            $deleted->delete();
            if(count($deleted)) {
                return ['success' => true, 'status' => 'deleted'];
            }
        }
        return ['success' => false, 'status' => 'access_denied'];
    }

    public function addRoles()
    {
        $user = User::find(2);

        $user->roles()->attach(3);

        return ['success' => true];
    }

    public function getRoles()
    {
        $user = auth()->user()->hasLevel(1337);

        if($user) {
            $msg = "Yes";
        } else {
            $msg = "No";
        }

        return $msg;
    }

    public function getData()
    {
        return ['test' => true];
    }

    public function setPassword(Request $request)
    {
        $user = User::find(4);
        $user->guest_password = bcrypt("natakar");
        $user->save();
        return ['test' => true];
    }

}
