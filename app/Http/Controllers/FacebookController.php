<?php

namespace App\Http\Controllers;

use App\Review;
use Illuminate\Http\Request;

class FacebookController extends Controller
{
    function __construct()
    {
        $this->middleware('auth');
    }

    public function show(Request $request)
    {
        $reviews = Review::with('user')->where('user_id', auth()->user()->id)->where('review', 'waiting')->orderBy('created_at', 'desc')->get();
        $reviews_done = Review::with('user')->where('user_id', auth()->user()->id)->where('review', '!=' , 'waiting')->orderBy('updated_at', 'desc')->take(10)->get();

        //if(count($reviews)) {
        return view('facebook')->with('reviews', $reviews)->with('reviews_done', $reviews_done);
        //}
        //return ['success' => true, 'status' => 'none'];
    }
}
