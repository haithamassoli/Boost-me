@extends('layouts.app')
@php $title = "Login"; @endphp
@section('title', $title)
@section('content')

    <style>
        input[type='checkbox'] {
            outline: 2px solid rgb(111, 134, 105);
            box-shadow: none;
        }

        input[type='checkbox']:checked {
            background: rgb(111, 134, 105);
            box-shadow: none;
        }

        input:checked+label {
            background-color: #fff;
        }

    </style>
    <section class="Login">
        <div class="container mt-5 ">
            <div class="row justify-content-center">
                <div class="col-lg-6 col-md-8 col-sm-10">
                    <div class="card mb-5">
                        <div class="login-card-header mt-3">{{ __('Log In to Your Account!') }}</div>

                        <div class="card-body">
                            <form id="form-register" method="POST" action="{{ route('login') }}">
                                @csrf

                                <div class="form-group">
                                    <label for="email" class="control-label">{{ __('E-Mail Address') }}</label>
                                    <input id="email" type="email" class="form-control @error('email') is-invalid @enderror"
                                        name="email" value="{{ old('email') }}" autocomplete="email" autofocus>

                                    @error('email')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror

                                </div>

                                <div class="form-group">
                                    <label for="password" class="control-label">{{ __('Password') }}</label>
                                    <input id="password" type="password"
                                        class="form-control @error('password') is-invalid @enderror" name="password"
                                        autocomplete="current-password">

                                    @error('password')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror

                                </div>

                                <div class="form-group">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" name="remember" id="remember"
                                            {{ old('remember') ? 'checked' : '' }}>

                                        <label class="form-check-label" for="remember">
                                            {{ __('Remember Me') }}
                                        </label>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <button type="submit" class="btn primaryBtn white full-width">
                                        {{ __('Login') }}
                                    </button>

                                    @if (Route::has('password.request'))
                                        <a class="text-black" href="{{ route('password.request') }}">
                                            {{ __('Forgot Your Password?') }}
                                        </a>
                                    @endif
                                </div>
                            </form>
                            <div class="mt-4">
                                <span>Don't have an account? <a class="ms-1 regster-href" href="{{ route('register') }}">Sign up</a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
