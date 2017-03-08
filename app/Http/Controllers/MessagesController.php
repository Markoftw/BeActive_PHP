<?php

namespace App\Http\Controllers;

use App\Ticket;
use Illuminate\Http\Request;

class MessagesController extends Controller
{
    function __construct()
    {
        $this->middleware('auth');
    }

    public function show()
    {
        $messages = Ticket::where('user_id', auth()->user()->id)->orderBy('id', 'DESC')->groupBy('ticket_group')->get();

        return view('home.messages')->with('messages', $messages);
    }

    public function showOne($id)
    {
        $ticket = Ticket::with('user')->where('ticket_group', $id)->groupBy('id')->groupBy('ticket_group')->orderBy('id', 'ASC')->get();
        $active = false;
        if(count($ticket)) {
            foreach ($ticket as $item) {
                if($item->user_id == auth()->user()->id) {
                    $active = true;
                }
            }
            if($active) {
                return view('home.messages_one')->with('ticket', $ticket)->with('agent', 'BlazTheNub');
            }
            return abort(401);
        }
        return abort(404);
    }

    public function postOne(Request $request, $id)
    {
        $this->validate($request, [
            'sporocilo' => 'required|min:3',
        ]);

        $first = Ticket::where('ticket_group', $id)->first();
        $data = $request->only('sporocilo');
        $newticket = Ticket::create([
            'ticket_group' => $id,
            'user_id' => auth()->user()->id,
            'agent_id' => 3, //spremenit
            'title' => $first['title'],
            'naslov' => $first['naslov'],
            'message' => $data['sporocilo'],
            'status' => $first['status']
        ]);

        $ticket = Ticket::with('user')->where('ticket_group', $id)->groupBy('id')->groupBy('ticket_group')->orderBy('id', 'ASC')->get();
        $active = false;
        if(count($ticket)) {
            foreach ($ticket as $item) {
                if($item->user_id == auth()->user()->id) {
                    $active = true;
                }
            }
            if($active) {
                return view('home.messages_one')->with('ticket', $ticket)->with('agent', 'BlazTheNub');
            }
            return abort(401);
        }
        return abort(404);
    }

    public function create()
    {
        return view('home.messages_new');
    }

    public function postCreate(Request $request)
    {
        $this->validate($request, [
            'tip' => 'required',
            'naslov' => 'required|min:3|max:255',
            'sporocilo' => 'required|min:3',
        ]);
        $data = $request->only('tip', 'naslov', 'sporocilo');
        $latest = Ticket::orderBy('id', 'DESC')->get()[0]->ticket_group;
        $ticket = Ticket::create([
            'ticket_group' => $latest + 1,
            'user_id' => auth()->user()->id,
            'agent_id' => 3, //spremenit
            'title' => $data['tip'],
            'naslov' => $data['naslov'],
            'message' => $data['sporocilo'],
            'status' => 'Aktivno'
        ]);
        if($ticket) {
            $messages = Ticket::where('user_id', auth()->user()->id)->orderBy('id', 'DESC')->groupBy('ticket_group')->get();
            return view('home.messages')->with('messages', $messages);
        }
        return abort(404);
    }
}
