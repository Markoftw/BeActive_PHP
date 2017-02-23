<?php

namespace App\Http\Controllers;

use App\Device;
use App\User;
use Illuminate\Http\Request;
use GuzzleHttp\Exception\GuzzleException;
use GuzzleHttp\Client;
use GuzzleHttp\Psr7\Request as GuzzleRequest;

class NotificationsController extends Controller
{
    private $API_ACCESS_KEY = 'AAAAh_YVzvM:APA91bFZgnaxujw1xAnmRBwVHGZRBuIrdIvfPQxH-T5bVPMVgz4Fn2MLFc4UgM3xTj1-Dp3_7oF7CK-rYLP2YmuTlA28BZfi8Gqe6hbMChQijEwtP5IP6fjOGwEe9foTHnAnr6tzHXLx';

    public function __construct()
    {
        $this->middleware(['auth', 'admins.level']);
    }

    public function show()
    {
        $devices = Device::with('user')->get();
        return view('notifications')->with('devices', $devices);
    }

    public function sendNotify(Request $request, $token)
    {
        $this->validate($request, [
            'title' => 'required|min:2|max:25',
            'message' => 'required|min:5|max:50'
        ]);

        $data = $request->only('title', 'message');

        $msg = array(
            'message' => $data['message'],
            'title' => $data['title'],
            'subtitle' => 'Subtitle Message',
            'tickerText' => 'Ticker Message',
            'vibrate' => 1,
            'sound' => 1,
            'largeIcon' => 'large_icon',
            'smallIcon' => 'small_icon'
        );

        $fields = array(
            'registration_ids' => [$token],
            'data' => $msg
        );


        $this->sendBroadcast($fields);

        return view('notifications_single')->with('message', true)->with('token', $token);
    }

    public function notify($token)
    {
        return view('notifications_single')->with('token', $token);
    }

    public function broadcast(Request $request)
    {
        $this->validate($request, [
            'title' => 'required|min:2|max:25',
            'message' => 'required|min:5|max:50'
        ]);

        $data = $request->only('title', 'message');

        $msg = array(
            'message' => $data['message'],
            'title' => $data['title'],
            'subtitle' => 'Subtitle Message',
            'tickerText' => 'Ticker Message',
            'vibrate' => 1,
            'sound' => 1,
            'largeIcon' => 'large_icon',
            'smallIcon' => 'small_icon'
        );

        $fields = array(
            'registration_ids' => $this->getRegistrationIDs(),
            'data' => $msg
        );


        $this->sendBroadcast($fields);

        return view('notifications')->with('message', true);
    }

    private function sendBroadcast($fields)
    {

        $headers = array(
            'Authorization: key=' . $this->API_ACCESS_KEY,
            'Content-Type: application/json'
        );
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, 'https://android.googleapis.com/gcm/send');
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($fields));
        $result = curl_exec($ch);
        curl_close($ch);
        /*try {
            $client = new Client();
            $response = $client->request('POST', 'https://android.googleapis.com/gcm/send', [
                'headers' => [
                    'Authorization' => 'key=' . $this->API_ACCESS_KEY,
                    'Content-Type' => 'application/json'
                ],
                'form_params' => json_encode($fields)
            ]);
        } catch (GuzzleException $e) {
            die($e->getMessage());
        }*/
        //$output = $response->getBody()->getContents();
    }

    public function getRegistrationIDs()
    {
        $device_array = [];
        $devices = Device::all();
        foreach ($devices as $device) {
            array_push($device_array, $device->device_token);
        }
        return $device_array;
    }
}
