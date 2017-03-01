@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="panel panel-default">
                    <div class="panel-heading clearfix">
                        <h4 class="panel-title pull-left" style="padding-top: 7px;">Manage Personal Gallery</h4>
                        <div class="btn-group pull-right">
                        </div>
                    </div>

                    <div class="panel-body">

                        @if(count($images))
                            @foreach($images as $image)
                                <ul>
                                    <li><img src="{{ route('images', $image->name) }}" alt="{{ $image->name }}"
                                             height="50" width="50">
                                        <span><b>Opis:</b> {{ $image->opis }}</span>
                                        <div class="btn-group pull-right">
                                            <a href="{{ route('images.delete', $image) }}" class="btn btn-danger">Delete</a>
                                        </div>
                                </ul>
                            @endforeach
                        @else
                            No files have been found
                        @endif

                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
