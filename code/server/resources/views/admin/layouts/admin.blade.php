<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title')</title>

    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="{{ asset('assets/css/bootstrap.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/vendors/simple-datatables/style.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/vendors/iconly/bold.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/vendors/perfect-scrollbar/perfect-scrollbar.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/vendors/bootstrap-icons/bootstrap-icons.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/app.css') }}">
    <link rel="shortcut icon" href="{{ asset('img/logo.png') }}" type="image/x-icon">
</head>

<body>
    <div id="app">
        <div id="sidebar" class="active">
            <div class="sidebar-wrapper active">
                <div class="ms-4">
                    <div class="d-flex justify-content-between">
                        <div class="logo pt-5 ps-3">
                            <a href="/admin"><img src="{{ asset('img/logo.png') }}" width="124" height="44"
                                    alt="Logo" srcset=""></a>
                        </div>
                        <div class="toggler">
                            <a href="#" class="sidebar-hide d-xl-none d-block"><i class="bi bi-x bi-middle"></i></a>
                        </div>
                    </div>
                </div>
                <div class="sidebar-menu">
                    <ul class="menu">
                        <li class="sidebar-title">Menu</li>
                        <li class="sidebar-item @if ($pageName == 'Admin Dashboard') active @endif">
                            <a href="/admin" class='sidebar-link'>
                                <i class="bi bi-grid-fill"></i>
                                <span>Dashboard</span>
                            </a>
                        </li>

                        <li class="sidebar-item @if ($pageName == 'Manage Users')  active @endif">
                            <a href="/admin/users" class='sidebar-link'>
                                <i class="fas fa-users"></i>
                                <span>Users</span>
                            </a>
                        </li>
                        <li class="sidebar-item @if ($pageName == 'Manage Games') active @endif">
                            <a href="/admin/games" class='sidebar-link'>
                                <i class="fas fa-book"></i>
                                <span>Games</span>
                            </a>
                        </li>
                        <li class="sidebar-item @if ($pageName == 'Manage Orders') active @endif">
                            <a href="/admin/orders" class='sidebar-link'>
                                <i class="fas fa-clipboard-list"></i>
                                <span>Orders</span>
                            </a>
                        </li>
                        <li class="sidebar-item">
                            <a href="/dashboard" class='sidebar-link'>
                                <i class="fas fa-clipboard-list"></i>
                                <span>Dashboard</span>
                            </a>
                        </li>
                        <li class="sidebar-item">
                            <a class="sidebar-link" href="{{ route('logout') }}"
                                        onclick="event.preventDefault();                                                                                                   document.getElementById('logout-form').submit();">
                                       <i class="fas fa-sign-out-alt me-3"></i> {{ __('Logout') }}
                                    </a>
                                    <form id="logout-form" action="{{ route('logout') }}" method="POST"
                                        class="d-none">
                                        @csrf
                                    </form>
                        </li>
                    </ul>
                </div>
                <button class="sidebar-toggler btn x"><i data-feather="x"></i></button>
            </div>
        </div>
        <div id="main">
            <header class="mb-3">
                <a href="#" class="burger-btn d-block d-xl-none">
                    <i class="bi bi-justify fs-3"></i>
                </a>
            </header>
            @yield('content')
<style>
    .flex-between{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    footer{
        position: static;
    }
</style>
            <footer>
                <div class="footer clearfix mb-0 text-muted">
                    <div class="flex-between">
                        <div>
                            <p>2022 &copy; BoostMe</p>
                        </div>
                        <div>
                            <p>Crafted with <span class="text-danger"><i class="bi bi-heart"></i></span> by Haitham
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </div>
    <script src="{{ asset('assets/vendors/perfect-scrollbar/perfect-scrollbar.min.js') }}"></script>
    <script src="{{ asset('assets/js/bootstrap.bundle.min.js') }}"></script>

    <script src="{{ asset('assets/vendors/apexcharts/apexcharts.js') }}"></script>
    <script src="{{ asset('assets/js/pages/dashboard.js') }}"></script>
    @yield('scripts')

    <script src="{{ asset('assets/js/main.js') }}"></script>

</body>

</html>
