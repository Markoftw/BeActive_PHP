<div class="navbar rw-navbar-static-top" role="complementary">
    <div class="navbar-text visible-lg">{{ is_null(auth()->user()->company) ? 'Ime podjetja spremenite v nastavitvah' : auth()->user()->company }}</div><!-- end .nav-text -->
    <div class="navbar-header"><span class="navbar-brand" id="title">{{ $page }}</span></div><!-- end .nav-header -->
    <div class="navbar-collapse collapse">
        <ul class="nav navbar-nav navbar-right">
            <li class="status on" id="socket-status"><span></span>Online</li>
            <li>
                <a href="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                    <span class="glyphicon glyphicon-off"></span>
                </a>

                <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                    {{ csrf_field() }}
                </form>
            </li>
        </ul>
    </div>
</div>