@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <div class="panel panel-default">
                <div class="panel-heading">APK Files</div>

                <div class="panel-body">

                    @if(count($files))
                        @foreach($files as $file)
                            <ul>
                                <li>{{ $file }} <span class="pull-right"><a href="{{ route('apkdownload', $file) }}">Prenesi</a></span></li>
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
