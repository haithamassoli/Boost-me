@php
$pageName = 'Manage Users';
@endphp
@extends('admin.layouts.admin')
@section('content')
    <div class="col-md-8 offset-md-2 col-12">
        <div class="card">
            <div class="card-header">
                <h4 class="card-title">Edit User</h4>
            </div>
            <div class="card-content">
                <div class="card-body">
                    <form class="form form-vertical" method="POST" action="{{ route('admin.users.update', $user->id) }}"
                        enctype="multipart/form-data">
                        @csrf
                        @method('put')
                        @include('alerts.fail')
                        <div class="form-body">
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-group has-icon-left">
                                        <label for="first-name-icon">Name</label>
                                        <div class="position-relative">
                                            <input type="text" name="name" value="{{ $user->name }}"
                                                class="form-control" placeholder="Name" id="first-name-icon">
                                            <div class="form-control-icon">
                                                <i class="bi bi-person"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">

                                    <div class="form-group has-icon-left">
                                        <label for="email-id-icon">Email</label>
                                        <div class="position-relative">
                                            <input type="text" name="email" value="{{ $user->email }}"
                                                class="form-control" placeholder="Email" id="email-id-icon">
                                            <div class="form-control-icon">
                                                <i class="bi bi-envelope"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group has-icon-left">
                                        <label for="password-id-icon">Password</label>
                                        <div class="position-relative">
                                            <input type="password" name="password" class="form-control"
                                                placeholder="password" value="{{ $user->password }}"
                                                id="password-id-icon">
                                            <div class="form-control-icon">
                                                <i class="bi bi-lock"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group has-icon-left">
                                        <label for="password-id-icon">Image</label>
                                        <div class="position-relative">
                                            <label for="image" style="position: relative;">
                                                <img src="{{ asset("img/$user->image") }}" width="100" height="100"
                                                    alt="profile_photo" style="cursor: pointer; object-fit:cover;">
                                                <input type="file" id="image" name="image" class="form-control d-none">
                                                <img style="position: absolute; cursor: pointer; bottom:-10px; left:70%"
                                                    src="{{ asset('img/plus.png') }}" width="50" height="50" alt="">
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group has-icon-left">
                                        <label for="Role">Role Type</label>
                                        <div class="position-relative">
                                            <select name="role_type" class="form-select" id="Role">
                                                <option @if ($user->role_type == 0) selected @endif value="0">User</option>
                                                <option @if ($user->role_type == 1) selected @endif value="1">Admin</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 d-flex justify-content-end">
                                    <button type="submit" class="btn btn-primary me-1 mb-1">Save</button>
                                    <button type="reset" class="btn btn-light-secondary me-1 mb-1">Reset</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
