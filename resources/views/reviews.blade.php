@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="panel panel-default">
                    <div class="panel-heading clearfix">
                        <h4 class="panel-title pull-left" style="padding-top: 7px;">Facebook posts reviews</h4>
                        <div class="btn-group pull-right">
                            <a href="{{ route('admin.reviews.create') }}" class="btn btn-primary">Create new</a>
                        </div>
                    </div>

                    <div class="panel-body">
                        @include('layouts.errors')
                        @if(count($reviews))
                            <h4>Reviews waiting for approval</h4>
                            <ul>
                            @foreach($reviews as $review)
                                <li>
                                    <b>User:</b> {{ $review->user->name }} <b>Image URL:</b> <a href="{{ route('images.public', [$review->user->id, $review->picture_url]) }}">Link</a>
                                    <b>Post title:</b> {{ $review->review_text }}
                                    <b>Status:</b> Waiting for approval <b>Created:</b> {{ \Carbon\Carbon::createFromTimeStamp(strtotime($review->created_at))->diffForHumans() }}
                                </li>
                            @endforeach
                            </ul>
                        @endif
                        @if(count($reviews_done))
                            <hr/>
                            <h4>Reviews completed</h4>
                            <ul>
                                @foreach($reviews_done as $review)
                                    <li>
                                        <b>User:</b> {{ $review->user->name }} <b>Image URL:</b> <a href="{{ route('images.public', [$review->user->id, $review->picture_url]) }}">Link</a>
                                        <b>Post title:</b> {{ $review->review_text }}
                                        <b>Status:</b> {{ $review->review }} <b>Reason:</b> {{ $review->reason }} <b>Rated:</b> {{ \Carbon\Carbon::createFromTimeStamp(strtotime($review->updated_at))->diffForHumans() }}
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
