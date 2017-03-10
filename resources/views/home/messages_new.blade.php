@extends('layouts.app')

@section('content')
    <body><!-- Mind class names -->

    <!-- Alpha -->
    <!--<div class="log_widget" id="log">

        <h1>Log</h1>
        <div class="data" id="alpha_clients" style="margin-bottom: 20px;"></div>
        <div class="data" id="alpha_data"></div>

    </div>-->
    <!-- end Alpha -->




    <!-- Main Container -->
    <div class="rw-main-container">

        <!-- Left Panel - Main Navigation -->
        <div class="rw-left-panel hidden-print">

            <!-- Navigation -->
            <nav class="navbar rw-navbar-static-left" role="navigation">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse-main">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="{{ url('/') }}">BeActive</a>
                </div><!-- end .nav-header -->
                <div class="navbar-collapse collapse navbar-collapse-main">

                    <div class="rw-panel">

                        <!-- Dashboard Menu -->
                        <ul class="nav nav-stacked rw-front card active">
                            <li>
                                <a href="{{ url('/home') }}"><span class="glyphicon glyphicon-home"></span>Dashboard</a>
                            </li>
                            <li>
                                <a href="{{ url('/home/statistics') }}"><span class="glyphicon glyphicon-signal"></span>Statistika</a>
                            </li>
                            <li>
                                <a href="{{ url('/home/application') }}"><span class="glyphicon glyphicon-phone"></span>Mobilna aplikacija</a>
                            </li>
                            <li>
                                <a href="{{ url('/home/pictures') }}"><span class="glyphicon glyphicon-picture"></span>Slike</a>
                            </li>
                            <li class="active">
                                <a href="{{ url('/home/messages') }}"><span class="glyphicon glyphicon-envelope"></span>Sporočila</a>
                            </li>
                            <li>
                                <a href="{{ url('/home/facebook') }}"><span class="glyphicon glyphicon-folder-open"></span>FB Objave</a>
                            </li>
                            <li>
                                <a href="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();" class="no-ajax">
                                    <span class="glyphicon glyphicon-log-out"></span>Odjava
                                </a>

                                <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                    {{ csrf_field() }}
                                </form>
                            </li>
                            <li class="visible-xs"><!-- Small screen only -->
                                <a href="{{ route('settings') }}" class="no-ajax"><span class="glyphicon glyphicon-cog"></span>Nastavitve</a>
                            </li>
                            <!--<li class="visible-xs">
                                <a href="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();" class="no-ajax">
                                    <span class="glyphicon glyphicon-off"></span>Sign Out
                                </a>

                                <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                    {{ csrf_field() }}
                                </form>
                            </li>
                        </ul>

                        <!-- Settings Menu -->
                        <ul class="nav nav-stacked rw-back card">
                            <li data-active="user-settings"><!-- Active item has class .active on li element -->
                                <a href="#"><span class="glyphicon glyphicon-cog"></span>Nastavitve</a>
                                <ul class="nav">
                                    <li data-activex="user-settings"><a href="#"><span class="dot"></span>Bank Account</a></li><!-- Active item has class .active on li element -->
                                    <li data-activex="user-settings-change-password"><a href="#"><span class="dot"></span>Change Password</a></li>
                                    <li data-activex="user-settings-notifications"><a href="#"><span class="dot"></span>Notifications</a></li>
                                    <li data-activex="user-settings-deactivate"><a href="#"><span class="dot"></span>Deactivate Account</a></li>
                                </ul>
                            </li>
                            <li data-active="user-security">
                                <a href="#"><span class="glyphicon glyphicon-lock"></span>Security</a>
                                <ul class="nav">
                                    <li data-activex="user-security"><a href="#"><span class="dot"></span>Two-factor Authentication</a></li>
                                    <li data-activex="user-security-email-confirmations"><a href="#"><span class="dot"></span>E-mail Confirmations</a></li>
                                    <li data-activex="user-security-api-access"><a href="#"><span class="dot"></span>API Access</a></li>
                                </ul>
                            </li>
                            <li class="visible-xs"><!-- Small screen only -->
                                <a href="{{ url('/home') }}" class="no-ajax"><span class="glyphicon glyphicon-home"></span>Dashboard</a>
                            </li>
                            <li class="visible-xs">
                                <a href="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();" class="no-ajax">
                                    <span class="glyphicon glyphicon-off"></span>Sign Out
                                </a>

                                <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                    {{ csrf_field() }}
                                </form>
                            </li>
                        </ul>

                    </div><!-- end .panel -->

                </div><!-- end .navbar-collapse -->
            </nav>
            <!-- end Navigation -->

            <!-- Footer -->
            <div class="footer hidden-xs"><!-- This is hidden on small devices -->
                <!-- Footer Navigation -->
                <div class="rw-footer-navigation">
                    <ul>
                        <li class="settings"><a href="{{ route('settings') }}" data-toggle="tooltip" data-placement="top" title="Settings" id="settings-nav-trigger"><span class="glyphicon glyphicon-cog"></span>Nastavitve</a></li>
                        <li class="dashboard rw-hide"><a id="dashboard-nav-trigger" data-toggle="tooltip" data-placement="top" title="Dashboard"><span class="glyphicon glyphicon-home"></span>Dashboard</a></li>
                    </ul>
                </div>
                <!-- end Footer Navigation -->
            </div>
            <!-- end Footer -->

        </div>
        <!-- end Left Panel - Main Navigation -->


        <!-- Right Panel - Main Content -->
        <div class="rw-right-panel">

            <!-- Main Header -->
            @include('layouts.company_header', ['page' => 'Sporočila'])
            <!-- end Main Header -->

            <!-- Main Container -->
            <div class="rw-container" id="frame"><!-- use .rw-container instead of .container on private_template -->
                <header>
                    <div>
                        <h1>Ustvari novo sporočilo</h1>
                    </div>
                    <div class="buttons pull-right">
                        <h1><a class="icon" title="Novo" href="{{ route('messages.new') }}"><span class="glyphicon glyphicon-plus"></span></a></h1>
                    </div>
                </header><hr/>

                <form name="povprasevanje" method="POST" action="{{ route('messages.new.post') }}" role="form">
                    {{ csrf_field() }}
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group"><!-- Error input has class .has-error on this element - this colours field and display help-block -->
                                <label class="control-label" for="tip">Tip sporočila</label>
                                <select class="input" id="tip" name="tip">
                                    <option value="Podpora">Podpora</option>
                                    <option value="Mobilna aplikacija">Mobilna aplikacija</option>
                                    <option value="Spletna stran">Spletna stran</option>
                                    <option value="Drugo">Drugo</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label class="control-label" for="naslov">Naslov</label>
                                <input type="text" class="input" id="naslov" name="naslov" placeholder="..." required/>
                                @if ($errors->has('naslov'))
                                    <span class="help-block"><strong>{{ $errors->first('naslov') }}</strong></span>
                                @endif
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label class="control-label" for="sporocilo">Sporočilo</label>
                                <textarea class="textarea" rows="3" id="sporocilo" name="sporocilo"></textarea>
                                @if ($errors->has('sporocilo'))
                                    <span class="help-block"><strong>{{ $errors->first('sporocilo') }}</strong></span>
                                @endif
                            </div>
                        </div>
                    </div>
                    <div class="row form-buttons">
                        <div class="col-md-6">
                            <button class="btn btn-lg btn-primary">Ustvari</button>
                        </div>
                    </div>
                </form>

            </div>
            <!-- end RW Container -->
        </div>
        <!-- end Right Panel - Main Content -->
    </div><!-- end Main Container -->
    <!-- Scripts -->
    <script type="text/javascript" charset="utf-8" src="../../js/jquery-2.1.0.min.js"></script>
    <script type="text/javascript" charset="utf-8" src="../../js/highstock.js"></script>
    <script type="text/javascript" charset="utf-8" src="../../js/bootstrap.min.js"></script>
    <script type="text/javascript" charset="utf-8" src="../../js/jquery.history.js"></script>
    <!--<script type="text/javascript" charset="utf-8" src="js/socket.io.min.js"></script>-->
    <script type="text/javascript" charset="utf-8" src="../../js/jQueryRotate.2.2.js"></script>
    <!--<script type="text/javascript" charset="utf-8" src="js/rw.js"></script>-->
    <script type="text/javascript" charset="utf-8" src="../../js/rw_alpha.js"></script>
    <!--<script type="text/javascript" charset="utf-8" src="js/app.js"></script>-->
    </body>
@endsection
