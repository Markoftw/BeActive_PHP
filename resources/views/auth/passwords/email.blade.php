@extends('layouts.app')

@section('content')
<!--<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">Reset Password</div>
                <div class="panel-body">
                    @if (session('status'))
                        <div class="alert alert-success">
                            {{ session('status') }}
                        </div>
                    @endif

                    <form class="form-horizontal" role="form" method="POST" action="{{ route('password.email') }}">
                        {{ csrf_field() }}

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

                        <div class="form-group">
                            <div class="col-md-6 col-md-offset-4">
                                <button type="submit" class="btn btn-primary">
                                    Send Password Reset Link
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

</div>--.
<!-- end Alpha -->

<!-- Signin Container -->
<div class="container">
    <h1 class="rw-logo"><a href="{{ url('/') }}">RW LOGO</a></h1>

    @if (session('status'))
        <div class="alert alert-success">
            {{ session('status') }}
        </div>
    @endif

    <form class="form-signin" role="form" method="POST" action="{{ route('password.email') }}">
        {{ csrf_field() }}
        <div class="rw-form-signin-heading rw-recovery clearfix">
            <h1>Password recovery</h1>
        </div>
        <div class="clearfix"></div>
        <div class="form-group rw-recovery">
            <input type="email" name="email" class="form-control rw-input" placeholder="Email address" required autofocus>
        </div>
        <div class="clearfix"></div>

        @if ($errors->has('email'))
            <span class="help-block">
                <strong style="color:white">{{ $errors->first('email') }}</strong>
            </span>
        @endif

        <button type="submit" class="btn btn-lg btn-primary btn-block" href="user-dashboard.php">Send Instructions</button>
        <!-- Use this in production: <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button> -->
        <div class="clearfix"></div>
        <div class="extra"><a href="{{ url('/login') }}">Sign In</a></div>

    </form>
</div>
<!-- end Signin Container -->

</body>

<!-- Scripts -->
<script type="text/javascript" charset="utf-8" src="js/jquery-2.1.0.min.js"></script>
<script type="text/javascript" charset="utf-8" src="js/highstock.js"></script>
<script type="text/javascript" charset="utf-8" src="js/bootstrap.min.js"></script>
<script type="text/javascript" charset="utf-8" src="js/jquery.history.js"></script>
<script type="text/javascript" charset="utf-8" src="js/jQueryRotate.2.2.js"></script>
<script type="text/javascript" charset="utf-8" src="js/rw.js"></script>
<script type="text/javascript" charset="utf-8" src="js/rw_alpha.js"></script>

@endsection
