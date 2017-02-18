@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="panel panel-default">
                    <div class="panel-heading clearfix">
                        <h4 class="panel-title pull-left" style="padding-top: 7px;">Personal Gallery (Uploads)</h4>
                        <div class="btn-group pull-right">
                            <a href="{{ route('images.manage') }}" class="btn btn-primary">Manage</a>
                        </div>
                    </div>

                    <div class="panel-body">

                        @if(count($images))
                            @foreach($images as $image)
                                <a href="{{ route('images', $image->name) }}" target="_blank"><img
                                            src="{{ route('images', $image->name) }}" alt="{{ $image->name }}"
                                            height="300" width="272"></a>
                            @endforeach
                        @else
                            Gallery is empty, upload some images with the phone application!
                        @endif

                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
