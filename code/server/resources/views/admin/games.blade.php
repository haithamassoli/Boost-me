@php
$pageName = 'Manage Games';
@endphp
@extends('admin.layouts.admin')
@section('content')
    <div class="page-heading">
        <div class="page-title">
            <div class="row">
                <div class="col-12 col-md-6 order-md-1 order-last mb-3">
                    <h3>Manage Games</h3>
                </div>
                <div class="col-12 col-md-6 order-md-2 order-first">
                    <nav aria-label="breadcrumb" class="breadcrumb-header float-start float-lg-end">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/admin">Dashboard</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Manage Games</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
        @include('alerts.success')
        <section class="section">
            <div class="card">
                <div class="card-header" style="display: flex; justify-content:space-between; align-items:center">
                    <div>Games Table</div>
                    <div>
                        <form action="/admin/games/create" method="GET">
                            <button class="btn btn-primary">Add Game</button>
                        </form>
                    </div>
                </div>
                <div class="card-body">
                    <table class="table table-striped" id="table1">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Game Name</th>
                                <th>Category</th>
                                <th>Tags</th>
                                <th>Price</th>
                                <th>Discount</th>
                                <th>Current Division</th>
                                <th>Desired Division</th>
                                <th>Cover Image</th>
                                <th>Images</th>
                                <th>Adjustments</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($games as $game)
                                <tr>
                                    <td>{{ $game->id }}</td>
                                    <td><div class="d-flex align-items-center"><img  class="avatar me-2" style="object-fit: cover" width="50" height="50" src="{{$game->main_image}}" alt="{{$game->name}}">{{ $game->name }}</div></td>
                                    <td>{{ $game->category }}</td>
                                    <td>{{ $game->tags }}</td>
                                    <td>${{ $game->price }}</td>
                                    <td>${{ $game->discount }}</td>
                                    <td>{{ $game->currentDivision }}</td>
                                    <td>{{ $game->desiredDivision }}</td>
                                    <td>
                                        <img class="me-2" style="object-fit: cover" width="50" height="50" src={{$game->cover_image}} alt={{$game->name}}>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center"> 
                                        @foreach ( explode(",",$game->images) as $index => $image)
                                        @if ($index == 3)
                                            @break
                                        @endif
                                        <img  class="avatar me-2" style="object-fit: cover" width="50" height="50" src="{{$image}}" alt="{{$image}}">
                                        @endforeach
                                    </div>   
                                    </td>
                                    <td>
                                        <a href="{{ route('admin.games.edit', $game->id) }}" class="ms-3 ">
                                            <i class="fas fa-cog"></i>
                                        </a>
                                        <form style="display: inline-block" method="POST"
                                            action="{{ route('admin.games.destroy', $game->id) }}">
                                            @csrf
                                            @method('delete')
                                            <button class="btn text-primary"><i class="far fa-trash-alt"></i></button>
                                        </form>
                                    </td>
                                </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
            </div>

        </section>
    </div>
@endsection
@section('scripts')

    <script src="{{ asset('assets/vendors/simple-datatables/simple-datatables.js') }}"></script>
    <script>
        // Simple Datatable
        let table1 = document.querySelector('#table1');
        let dataTable = new simpleDatatables.DataTable(table1);
    </script>
@endsection
