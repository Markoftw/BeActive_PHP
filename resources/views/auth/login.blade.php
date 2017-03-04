@extends('layouts.app')

@section('content')
    <!--<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">Login</div>
                <div class="panel-body">
                    <form class="form-horizontal" role="form" method="POST" action="{{ route('login') }}">
                        {{ csrf_field() }}

            <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
                            <label for="email" class="col-md-4 control-label">E-Mail Address</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control" name="email" value="{{ old('email') }}" required autofocus>

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
            <div class="col-md-6 col-md-offset-4">
                <div class="checkbox">
                    <label>
                        <input type="checkbox" name="remember" {{ old('remember') ? 'checked' : '' }}> Remember Me
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-md-8 col-md-offset-4">
                                <button type="submit" class="btn btn-primary">
                                    Login
                                </button>

                                <a class="btn btn-link" href="{{ route('password.request') }}">
                                    Forgot Your Password?
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>-->

    <body class='rw-signin'>
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

        <form class="form-signin" role="form" method="POST" action="{{ route('login') }}">
            {{ csrf_field() }}
            <div class="rw-form-signin-heading clearfix">
                <h1 class="pull-left">Prijava</h1>
                <h4 class="pull-right"><a href="{{ url('/register') }}">Registracija</a></h4>
            </div>
            <input type="email" name="email" class="form-control rw-input email" placeholder="E-poštni naslov" required>
            @if ($errors->has('email'))
                <span class="help-block">
                    <strong style="color: white;">{{ $errors->first('email') }}</strong>
                </span>
            @endif
            <!-- Note: different classes than user pages -->
            <input type="password" name="password" class="form-control rw-input password" placeholder="Geslo"
                   required><!-- Note: different classes than user pages -->
            @if ($errors->has('password'))
                <span class="help-block">
                    <strong style="color: white;">{{ $errors->first('password') }}</strong>
                </span>
            @endif
            <div class="clearfix"></div>
            <button type="submit" class="btn btn-lg btn-primary btn-block">Prijava</button>
            <!-- Use this in production: <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button> -->
            <div class="clearfix"></div>
            <div class="extra"><a href="{{ route('password.request') }}">Pozabljeno geslo?</a></div>
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
