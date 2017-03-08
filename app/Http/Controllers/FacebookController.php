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
        return view('home.facebook')->with('reviews', $reviews)->with('reviews_done', $reviews_done);
    }

    public function showOne($id)
    {
        $review = Review::with('user')->find($id);
        if(count($review) && $review->review == 'waiting' && $review->user_id == auth()->user()->id) {
            return view('home.facebook_review')->with('review', $review);
        }
        return abort(404);
    }

    public function postOne(Request $request, $id)
    {
        $this->validate($request, [
            'odlocitev' => 'required'
        ]);

        $odlocitev = $request->only('odlocitev', 'razlog');

        $review = Review::find($id);
        $review->review = ($odlocitev['odlocitev'] == 'accept') ? 'Approved' : 'Disapproved';
        $review->reason = ($odlocitev['odlocitev'] == 'accept') ? 'ok' : $odlocitev['razlog'];
        $review->save();

        $reviews = Review::with('user')->where('user_id', auth()->user()->id)->where('review', 'waiting')->orderBy('created_at', 'desc')->get();
        $reviews_done = Review::with('user')->where('user_id', auth()->user()->id)->where('review', '!=' , 'waiting')->orderBy('updated_at', 'desc')->take(10)->get();
        return view('home.facebook')->with('reviews', $reviews)->with('reviews_done', $reviews_done);
    }
}
