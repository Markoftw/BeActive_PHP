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
                        <form method="POST" action="{{ route('notifications.notify.send',$token) }}">
                            {{ csrf_field() }}
                            <div class="form-group">
                                <label for="title">Notification title:</label>
                                <input type="text" id="title" name="title" class="form-control" placeholder="Title" />
                            </div>
                            <div class="form-group">
                                <label for="message">Notification message:</label>
                                <textarea id="message" name="message" class="form-control" placeholder="Message"></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary pull-right">Send notification</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
