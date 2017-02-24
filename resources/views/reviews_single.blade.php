@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="panel panel-default">
                    <div class="panel-heading clearfix">
                        <h4 class="panel-title pull-left" style="padding-top: 7px;">Facebook posts - Create new</h4>
                        <div class="btn-group pull-right">
                        </div>
                    </div>

                    <div class="panel-body">
                        @include('layouts.errors')
                        @if(isset($message))
                            <div class="form-group">
                                <div class="alert alert-success">
                                    Facebook post example sent!
                                </div>
                            </div>
                        @endif
                        <form method="POST" action="{{ route('admin.reviews.create') }}" enctype="multipart/form-data">
                            {{ csrf_field() }}
                            <div class="form-group">
                                <label for="username">User:</label>
                                <input type="text" id="username" name="username" class="form-control" placeholder="Username" />
                            </div>
                            <div class="form-group">
                                <label for="imgtitle">Post message:</label>
                                <input type="text" id="imgtitle" name="imgtitle" class="form-control" placeholder="Post message" />
                            </div>
                            <div class="form-group">
                                <label for="photo">Select File</label>
                                <input id="photo" type="file" name="photo" class="form-control" data-show-preview="false">
                            </div>
                            <div class="form-group">
                                <label for="title">Notification title:</label>
                                <input type="text" id="title" name="title" class="form-control" placeholder="Notification title" />
                            </div>
                            <div class="form-group">
                                <label for="message">Notification message:</label>
                                <textarea id="message" name="message" class="form-control" placeholder="Notification message"></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary pull-right">Send review</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
