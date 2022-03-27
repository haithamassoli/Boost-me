@php
$pageName = 'Manage Orders';
@endphp
@extends('admin.layouts.admin')
@section('title', $pageName)
@section('content')
    <div class="page-heading">
        <div class="page-title">
            <div class="row">
                <div class="col-12 col-md-6 order-md-1 order-last mb-3">
                    <h3>Manage Orders</h3>
                </div>
                <div class="col-12 col-md-6 order-md-2 order-first">
                    <nav aria-label="breadcrumb" class="breadcrumb-header float-start float-lg-end">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/admin">Dashboard</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Manage Orders</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
        @include('alerts.success')
        <section class="section">
            <div class="card">
                <div class="card-header" style="display: flex; justify-content:space-between; align-items:center">
                    <div>Orders Table</div>
                </div>
                <div class="card-body">
                    <table class="table table-striped" id="table1">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>User Name</th>
                                <th>Price</th>
                                <th>Adjustments</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($orders as $order)
                                <tr>
                                    <td>{{ $order->id }}</td>
                                    <td>{{ $order->user_id }}</td>
                                    <td>{{ $order->total_price }}</td>
                                    <td>
                                        <form style="display: inline-block" method="POST"
                                            action="{{ route('admin.users.destroy', $order->id) }}">
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
