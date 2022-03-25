@php
$pageName = 'Manage Games';
@endphp
@extends('admin.layouts.admin')
@section('content')
    <style>
        .ck-editor__editable {
            min-height: 200px;
        }

    </style>
    <div class="col-12">
        <div class="card">
            <div class="card-header">
                <h4 class="card-title">Edit {{ $game->name }} Game</h4>
            </div>
            <div class="card-content">
                <div class="card-body">
                    <form class="form form-vertical" method="POST" action="{{ route('admin.games.update', $game->id) }}"
                        enctype="multipart/form-data">
                        @csrf
                        @include('alerts.fail')
                        @method('put')
                        <div class="form-body">
                            <div class="row">
                                <div class="col-12 col-md-6">
                                    <div class="form-group has-icon-left">
                                        <label for="first-name-icon">Game Name</label>
                                        <div class="position-relative">
                                            <input type="text" name="name" class="form-control"
                                                value="{{ $game->name }}" placeholder="Name" id="first-name-icon">
                                            <div class="form-control-icon">
                                                <i class="fas fa-book"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <div class="form-group has-icon-left">
                                        <label for="first-name-icon">Main Image</label>
                                        <div class="position-relative">
                                            <input type="text" value="{{$game->main_image}}" name="main_image" class="form-control" placeholder="Name"
                                                id="first-name-icon">
                                            <div class="form-control-icon">
                                                <i class="fas fa-book"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <div class="form-group has-icon-left">
                                        <label for="first-name-icon">Cover Image for Game</label>
                                        <div class="position-relative">
                                            <input type="text" value="{{$game->cover_image}}" name="cover_image" class="form-control" placeholder="cover_image"
                                                id="first-name-icon">
                                            <div class="form-control-icon">
                                                <i class="fas fa-book"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <div class="form-group has-icon-left">
                                        <label for="first-name-icon">Images for Game</label>
                                        <div class="position-relative">
                                            <input type="text" value="{{$game->images}}" name="images" class="form-control" placeholder="Name"
                                                id="first-name-icon">
                                            <div class="form-control-icon">
                                                <i class="fas fa-book"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <div class="form-group has-icon-left">
                                        <label for="first-name-icon">Category</label>
                                        <div class="position-relative">
                                            <select name="category" class="form-select form-control">
                                                @foreach ($categories as $category)
                                                <option @php $game->name == $category->name ?? selected @endphp value="{{$category->name}}">{{$category->name}}</option>
                                                @endforeach
                                            </select>
                                            <div class="form-control-icon">
                                                <i class="fas fa-book"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <div class="form-group has-icon-left">
                                        <label for="email-id-icon">Tags</label>
                                        <div class="position-relative">
                                            <input type="text" value="{{$game->tags}}" name="tags" class="form-control"
                                                placeholder="Descreption" id="email-id-icon">
                                            <div class="form-control-icon">
                                                <i class="fas fa-pencil-alt"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <div class="form-group has-icon-left">
                                        <label for="email-id-icon">Current Division</label>
                                        <div class="position-relative">
                                            <input type="text" value="{{$game->currentDivision}}" name="currentDivision" class="form-control"
                                                placeholder="Descreption" id="email-id-icon">
                                            <div class="form-control-icon">
                                                <i class="fas fa-pencil-alt"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <div class="form-group has-icon-left">
                                        <label for="email-id-icon">Desired Division</label>
                                        <div class="position-relative">
                                            <input type="text" value="{{$game->desiredDivision}}" name="desiredDivision" class="form-control"
                                                placeholder="Descreption" id="email-id-icon">
                                            <div class="form-control-icon">
                                                <i class="fas fa-pencil-alt"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <div class="form-group has-icon-left">
                                        <label for="email-id-icon">Price</label>
                                        <div class="position-relative">
                                            <input type="number" value="{{$game->price}}" name="price" class="form-control"
                                                placeholder="Descreption" id="email-id-icon">
                                            <div class="form-control-icon">
                                                <i class="fas fa-pencil-alt"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <div class="form-group has-icon-left">
                                        <label for="email-id-icon">Discount</label>
                                        <div class="position-relative">
                                            <input type="number" value="{{$game->discount}}" name="discount" class="form-control"
                                                placeholder="Descreption" id="email-id-icon">
                                            <div class="form-control-icon">
                                                <i class="fas fa-pencil-alt"></i>
                                            </div>
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
@section('scripts')
    <script src="//cdn.ckeditor.com/4.17.1/standard/ckeditor.js"></script>
@endsection
