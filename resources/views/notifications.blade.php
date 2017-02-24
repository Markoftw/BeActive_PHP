@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="panel panel-default">
                    <div class="panel-heading clearfix">
                        <h4 class="panel-title pull-left" style="padding-top: 7px;">Notifications</h4>
                        <div class="btn-group pull-right">
                        </div>
                    </div>

                    <div class="panel-body">
                        @include('layouts.errors')
                        @if(isset($message))
                            <div class="form-group">
                                <div class="alert alert-success">
                                    Message sent!
                                </div>
                            </div>
                        @endif
                        <form method="POST" action="{{ route('notifications.broadcast') }}">
                            {{ csrf_field() }}
                            <div class="form-group">
                                <label for="title">Broadcast title to all:</label>
                                <input type="text" id="title" name="title" class="form-control" placeholder="Title" />
                            </div>
                            <div class="form-group">
                                <label for="message">Broadcast message to all:</label>
                                <textarea id="message" name="message" class="form-control" placeholder="Message"></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary pull-right">Broadcast</button>
                        </form>
                        <br/>
                        <hr>
                        @if(count($devices))
                            <ul>
                            @foreach($devices as $device)
                                <li>
                                    <b>{{ $device->user->name }}</b>, Registered device since: {{ $device->created_at }}, last changed: {{ $device->updated_at }}
                                    <span class="pull-right"><a href="{{ route('notifications.notify', $device->device_token) }}" class="btn btn-default">Notify</a></span>
                                </li>
                            @endforeach
                            </ul>
                        @endif
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
