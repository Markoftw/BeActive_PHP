
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>{{ config('app.name', 'Laravel') }}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Styles -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/rw-theme.css" rel="stylesheet">

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
    <![endif]-->

    <!-- Icons -->
    <link rel="shortcut icon" href="ico/favicon.ico">

    <!-- Fonts -->
    <link href='http://fonts.googleapis.com/css?family=Lato:400,300,700' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,600,300' rel='stylesheet' type='text/css'>
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
                <a class="navbar-brand" href="{{ url('/') }}">Logo</a>
            </div>
            <div class="navbar-collapse collapse">
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="{{ url('/about') }}">O nas</a></li><!-- Active item has class .active on li element -->
                    <li class="active"><a href="{{ url('/terms') }}">Terms</a></li>
                    <li><a href="{{ url('/login') }}">Prijava</a></li>
                    <li><a href="{{ url('/register') }}">Registracija</a></li>
                </ul>
            </div><!-- end .navbar-collapse -->
        </div>
    </div>
    <!-- end Navigation -->
</div>
<!-- end Home Header -->

<!-- Home Container -->
<div class="rw-home-container">

    <!-- Main Container -->
    <div class="container">




        <!-- Terms Row -->
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="page-header">
                    <h1>Terms of service</h1>
                    <p class="lead">Last update 25.2.2014</p>
                </div>

                <h2>Important Term 1</h2>
                <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis vitae nibh nec laoreet. Etiam ut metus at elit varius vehicula. </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis vitae nibh nec laoreet. Etiam ut metus at elit varius vehicula. Curabitur porttitor ligula est, ullamcorper varius ante dapibus in. Pellentesque et nibh ultrices, pharetra ipsum vitae, hendrerit ipsum. Curabitur fringilla ut risus vitae cursus. Mauris aliquet diam vel porttitor pulvinar. Proin ipsum libero, rutrum at arcu sit amet, imperdiet convallis massa. Pellentesque sagittis nec est sit amet fermentum. Proin facilisis interdum ligula in malesuada. Proin a laoreet enim. </p>

                <hr>

                <h2>Important Term 2</h2>
                <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis vitae nibh nec laoreet. Etiam ut metus at elit varius vehicula. </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis vitae nibh nec laoreet. Etiam ut metus at elit varius vehicula. Curabitur porttitor ligula est, ullamcorper varius ante dapibus in. Pellentesque et nibh ultrices, pharetra ipsum vitae, hendrerit ipsum. Curabitur fringilla ut risus vitae cursus. Mauris aliquet diam vel porttitor pulvinar. Proin ipsum libero, rutrum at arcu sit amet, imperdiet convallis massa. Pellentesque sagittis nec est sit amet fermentum. Proin facilisis interdum ligula in malesuada. Proin a laoreet enim. </p>

                <hr>

                <h3>Less Important Term</h3>
                <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis vitae nibh nec laoreet. Etiam ut metus at elit varius vehicula. </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis vitae nibh nec laoreet. Etiam ut metus at elit varius vehicula. Curabitur porttitor ligula est, ullamcorper varius ante dapibus in. Pellentesque et nibh ultrices, pharetra ipsum vitae, hendrerit ipsum. Curabitur fringilla ut risus vitae cursus. Mauris aliquet diam vel porttitor pulvinar. Proin ipsum libero, rutrum at arcu sit amet, imperdiet convallis massa. Pellentesque sagittis nec est sit amet fermentum. Proin facilisis interdum ligula in malesuada. Proin a laoreet enim. </p>

            </div>
        </div>
        <!-- end Terms Row -->

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
<!--<script type="text/javascript" charset="utf-8" src="js/rw.js"></script>-->
<script type="text/javascript" charset="utf-8" src="js/rw_alpha.js"></script>




</body>
</html>