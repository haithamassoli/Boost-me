@php
$pageName = 'Manage Users';
@endphp
@extends('admin.layouts.admin')
@section('content')  

<div class="page-heading">
    <div class="page-title">
        <div class="row">
            <div class="col-12 col-md-6 order-md-1 order-last mb-3">
                <h3>{{$users[0]->name}} Quizes</h3>
            </div>
            <div class="col-12 col-md-6 order-md-2 order-first">
                <nav aria-label="breadcrumb" class="breadcrumb-header float-start float-lg-end">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/admin">Dashboard</a></li>
                        <li class="breadcrumb-item active" aria-current="page"><a href="/admin/users">Manage Users</a></li>
                        <li class="breadcrumb-item active" aria-current="page">{{$users[0]->name}}</li>
                    </ol>
                </nav>
            </div>
        </div>
    </div>
    @include('alerts.success')
    <section class="section">
        <div class="card">
            <div class="card-header" style="display: flex; justify-content:space-between; align-items:center">
                <div>
                    <img src="/img/{{$users[0]->image}}" class="avatar" style="object-fit: cover" width="50" height="50" alt="">
                    {{$users[0]->name}}
                </div>
            </div>
            <div class="card-body">
                <table class="table table-striped" id="table1">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Quiz</th>
                            <th>Total Mark</th>
                            <th>{{$users[0]->name}} Answer</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($users[0]->exams as $user)
                        @php $total = 0; @endphp
                        @php $total_mark = 0; @endphp
                            <tr>
                                <td>{{ $user->id }}</td>
                                <td>{{ $user->exam_name }}</td>
                                <td>
                                    @foreach ($users[0]->userAnswer as $item )
                                        @php
                                        if ($user->id == $item->exam_id){
                                            $total += $item->marks;
                                        }
                                        @endphp
                                    @endforeach  
                                    {{ $total }}/@foreach ($questions as $question)@php
                                    if ($question->exam_id == $user->id){
                                     $total_mark += $question->question_point;
                                    } 
                                     @endphp  @endforeach  {{$total_mark}} 

                                </td>
                                <td>
                                    {{-- <a href="{{ route('admin.users.show', $user->id) }}">
                                        <i class="far fa-eye"></i>
                                    </a> --}}
                                    <a href="/admin/show-result/{{$user->exam_name}}/{{$users[0]->id}}"><button class="btn btn-primary">Show</button></a>
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