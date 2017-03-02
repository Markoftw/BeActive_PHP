<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>
    <link rel="shortcut icon" href="ico/favicon.ico">

    <!-- Styles -->
    <link href="/css/app.css" rel="stylesheet">

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
    <![endif]-->

    <!-- Fonts -->
    <link href='http://fonts.googleapis.com/css?family=Lato:400,300,700' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,600,300' rel='stylesheet' type='text/css'>

    <!-- Scripts -->
    <script>
        window.Laravel = {!! json_encode([
            'csrfToken' => csrf_token(),
        ]) !!};
    </script>
</head>
<body class='rw-home'><!-- Mind class names -->

<!-- Alpha -->
<div class="log_widget" id="log">

    <h1>Log</h1>
    <div class="data" id="alpha_clients" style="margin-bottom: 20px;"></div>
    <div class="data" id="alpha_data"></div>

</div>
<!-- end Alpha -->

<!-- Home Header -->
<div class="rw-home-header">
    <!-- Navigation -->
    <div class="navbar rw-navbar-homepage" role="navigation">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="{{ url("/") }}">Logo</a>
            </div>
            <div class="navbar-collapse collapse">
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="{{ url('/about') }}">About</a></li><!-- Active item has class .active on li element -->
                    <li><a href="{{ url('/terms') }}">Terms</a></li>
                    <li><a href="{{ url('/login') }}">Sign In</a></li>
                    <li><a href="{{ url('/register') }}">Register</a></li>
                </ul>
            </div><!-- end .navbar-collapse -->
        </div>
    </div>
    <!-- end Navigation -->
    <!-- Cover -->
    <div class="rw-home-cover">
        <h1>Advertise <br><span>via</span></h1>
        <ul class="rw-buttons">
            <li class="left">
                <span class="icon"></span>
                Facebook
            </li>
            <li class="middle">or</li>
            <li class="right">
                <span class="icon"></span>
                Search engines
            </li>
        </ul>
    </div>
    <!-- end Cover -->
</div>
<!-- end Home Header -->

<!-- Home Container -->
<div class="rw-home-container">

    <!-- Main Container -->
    <div class="container">


        <!-- Features -->
        <!-- Use any glyphicon class for feature item listed here: http://getbootstrap.com/components/#glyphicons -->
        <div class="row rw-features">
            <h1>BeActive Features</h1>
            <h3>Advertising has never been so easy!</h3>

            <div class="col-md-4">
                <div class="rw-feature-item"><span class="icon globe"></span></div>
                <h2>Global</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla adipiscing leo tellus, at sagittis
                    quam porta non. Phasellus volutpat sed orci eu congue. </p>
            </div>
            <div class="col-md-4">
                <div class="rw-feature-item"><span class="icon plane"></span></div>
                <h2>Fast</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla adipiscing leo tellus, at sagittis
                    quam porta non. Phasellus volutpat sed orci eu congue. </p>
            </div>
            <div class="col-md-4">
                <div class="rw-feature-item"><span class="icon lock"></span></div>
                <h2>Secure</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla adipiscing leo tellus, at sagittis
                    quam porta non. Phasellus volutpat sed orci eu congue. </p>
            </div>
        </div>
        <!-- end Features -->

    </div>
    <!-- end Main Container -->

    <div class="rw-features rw-feature-image">
        <h1>Beautiful Dashboard</h1>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla adipiscing leo tellus, at sagittis. Nullam
            ligula quam, tempor nec lorem ut, porta venenatis dui.</h3>

        <img src="img/dashboard.png" class="image">
    </div>

    <!-- Feature Signup -->
    <div class="rw-feature-signup">
        <div class="container">
            <div class="col-md-6">
                <h2>Don't take our word for it</h2>
            </div>
            <div class="col-md-4 col-md-offset-2">
                <a href="{{ url('/register') }}" class="btn btn-lg btn-primary btn-block">Try it for Free!</a>
            </div>
        </div>
    </div>
    <!-- end Feature Signup -->

    <!-- Main Container -->
    <div class="container">

    </div>
    <!-- end Main Container -->

</div>
<!-- end Home Container -->

<!-- Home Footer -->
<footer class="rw-home-footer">
    <div class="container">
        <div class="copyright">&copy; 2017 {{ config('app.name', 'Laravel') }}</div>
        <ul class="social">
            <li><a href="#" title="Twitter" target="_blank"><span class="icon twitter"></span></a></li>
            <li><a href="#" title="Facebook" target="_blank"><span class="icon facebook"></span></a></li>
            <li><a href="#" title="Google+" target="_blank"><span class="icon google"></span></a></li>
        </ul>
    </div>
</footer>
<!-- end Home Footer -->


<!-- Scripts -->
<script type="text/javascript" charset="utf-8" src="js/jquery-2.1.0.min.js"></script>
<script type="text/javascript" charset="utf-8" src="js/highstock.js"></script>
<script type="text/javascript" charset="utf-8" src="js/bootstrap.min.js"></script>
<script type="text/javascript" charset="utf-8" src="js/jquery.history.js"></script>
<script type="text/javascript" charset="utf-8" src="js/jQueryRotate.2.2.js"></script>
<script type="text/javascript" charset="utf-8" src="js/rw.js"></script>
<script type="text/javascript" charset="utf-8" src="js/rw_alpha.js"></script>


</body>

</html>

