@extends('layouts.app')

@section('content')
    <!--<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">Register</div>
                <div class="panel-body">
                    <form class="form-horizontal" role="form" method="POST" action="{{ route('register') }}">
                        {{ csrf_field() }}

            <div class="form-group{{ $errors->has('name') ? ' has-error' : '' }}">
                            <label for="name" class="col-md-4 control-label">Name</label>

                            <div class="col-md-6">
                                <input id="name" type="text" class="form-control" name="name" value="{{ old('name') }}" required autofocus>

                                @if ($errors->has('name'))
        <span class="help-block">
            <strong>{{ $errors->first('name') }}</strong>
                                    </span>
                                @endif
            </div>
        </div>

        <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
                            <label for="email" class="col-md-4 control-label">E-Mail Address</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control" name="email" value="{{ old('email') }}" required>

                                @if ($errors->has('email'))
        <span class="help-block">
            <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif
            </div>
        </div>

        <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
                            <label for="password" class="col-md-4 control-label">Password</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control" name="password" required>

                                @if ($errors->has('password'))
        <span class="help-block">
            <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                @endif
            </div>
        </div>

        <div class="form-group">
            <label for="password-confirm" class="col-md-4 control-label">Confirm Password</label>

            <div class="col-md-6">
                <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required>
            </div>
        </div>

        <div class="form-group">
            <div class="col-md-6 col-md-offset-4">
                <button type="submit" class="btn btn-primary">
                    Register
                </button>
            </div>
        </div>
    </form>
</div>
</div>
</div>
</div>
</div>-->

    <body class='rw-signin'><!-- Mind class names -->

    <!-- Alpha -->
    <!--<div class="log_widget" id="log">

        <h1>Log</h1>
        <div class="data" id="alpha_clients" style="margin-bottom: 20px;"></div>
        <div class="data" id="alpha_data"></div>

    </div>-->
    <!-- end Alpha -->

    <!-- Signin Container -->
    <div class="container">
        <h1 class="rw-logo"><a href="{{ url('/') }}">RW LOGO</a></h1>

        <form class="form-signin" role="form" method="POST" action="{{ route('register') }}">
            {{ csrf_field() }}
            <div class="rw-form-signin-heading clearfix">
                <h1 class="pull-left">Sign Up</h1>
                <h4 class="pull-right"><a href="{{ url('/login') }}">Sign In</a></h4>
            </div>
            <div class="form-group">
                <label class="control-label" for="name">Username</label>
                <input type="text" name="name" class="form-control rw-input" id="name" placeholder="Enter username"
                       required>
                <span class="help-block error">Required field</span>
            </div>
            <div class="form-group">
                <label class="control-label" for="email">Email address</label>
                <input type="email" name="email" class="form-control rw-input" id="email" placeholder="Enter email"
                       required>
                <span class="help-block error">Required field</span>
            </div>
            <div class="form-group">
                <!-- See http://getbootstrap.com/css/#forms-control-validation for Validation states -->
                <!-- Adding has-error will also display help-block down bellow -->
                <label class="control-label" for="password">Password</label>
                <input id="password" type="password" name="password" class="form-control rw-input" required>
                <span class="help-block error">Required field</span>
            </div>
            <div class="form-group">
                <label class="control-label" for="password">Repeat password</label>
                <input id="password-confirm" type="password" name="password_confirmation" class="form-control rw-input"
                       required>
                <span class="help-block error">Required field</span>
            </div>
            <!--<div class="form-group">
                <label class="control-label" for="country">Country</label>
                <select class="form-control rw-input" id="country">
                    <option>Slovenia</option>
                </select>
            </div>-->
            <!--<div class="form-group">
                <label class="control-label" for="timezone">Time zone</label>
                <select class="form-control rw-input" id="timezone">
                    <option>(UTC +01:00) Ljubljana</option>
                </select>
            </div>-->
            <div class="clearfix"></div>
            <button type="submit" class="btn btn-lg btn-primary btn-block">Sign Up</button>
            <!-- Use this in production: <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button> -->
        </form>

    </div>
    <!-- end Signin Container -->
    <script type="text/javascript" charset="utf-8" src="js/jquery-2.1.0.min.js"></script>
    <script type="text/javascript" charset="utf-8" src="js/highstock.js"></script>
    <script type="text/javascript" charset="utf-8" src="js/bootstrap.min.js"></script>
    <script type="text/javascript" charset="utf-8" src="js/jquery.history.js"></script>
    <script type="text/javascript" charset="utf-8" src="js/jQueryRotate.2.2.js"></script>
    <script type="text/javascript" charset="utf-8" src="js/rw.js"></script>
    <script type="text/javascript" charset="utf-8" src="js/rw_alpha.js"></script>
    </body>

@endsection
