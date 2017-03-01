<?php

namespace App\Http\Controllers;

use App\Device;
use App\Review;
use App\Upload;
use App\User;
use Illuminate\Http\Request;
use JWTAuth;
use Storage;

class ReviewController extends Controller
{
    private $API_ACCESS_KEY = 'AAAAh_YVzvM:APA91bFZgnaxujw1xAnmRBwVHGZRBuIrdIvfPQxH-T5bVPMVgz4Fn2MLFc4UgM3xTj1-Dp3_7oF7CK-rYLP2YmuTlA28BZfi8Gqe6hbMChQijEwtP5IP6fjOGwEe9foTHnAnr6tzHXLx';

    public function show(Request $request)
    {
        $reviews = Review::with('user')->where('review', 'waiting')->orderBy('created_at', 'desc')->get();
        $reviews_done = Review::with('user')->where('review', '!=' , 'waiting')->orderBy('updated_at', 'desc')->get();

        if(count($reviews)) {
            return view('reviews')->with('reviews', $reviews)->with('reviews_done', $reviews_done);

        }
        return ['success' => true, 'status' => 'none'];
    }

    public function showCreate()
    {
        return view('reviews_single');
    }

    public function create(Request $request)
    {
        $this->validate($request, [
            'username' => 'required|min:1',
            'title' => 'required|min:2|max:25',
            'message' => 'required|min:5|max:50',
            'imgtitle' => 'required|min:5|max:255',
        ]);

        $data = $request->only('message', 'title', 'username', 'imgtitle');
        if($request->hasFile('photo') && $request->file('photo')->isValid()) {
            $user = User::with('devices')->where('name', $data['username'])->get();
            if(count($user)) {
                $image_name = $this->generateRandomString() . "." . $request->photo->extension();
                //return $user[0]->devices[0]->device_token;
                $path = "pictures/" . $user[0]->id . "/" . $image_name;
                $exists = Storage::exists($path);
                if($exists) {
                    return ['file_already_exists' => true];
                }
                $storage = $request->photo->storeAs("pictures/" . $user[0]->id, $image_name);
                if($storage) {

                    $upload = new Review();
                    $upload->user_id = $user[0]->id;
                    $upload->picture_url = $image_name;
                    $upload->review_text = $data['imgtitle'];
                    $upload->save();

                    if($upload) {
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
                            'registration_ids' => [$user[0]->devices[0]->device_token],
                            'data' => $msg
                        );


                        $this->sendBroadcast($fields);
                        return view('reviews_single')->with('message', true);
                    }
                    return abort(404);
                }
                return abort(404);
            }
            return "user not found";
        }
        return abort(404);
    }

    function generateRandomString($length = 30) {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }
        return $randomString;
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
    }
}
