@php
$pageName = 'Manage Exams';
@endphp
@extends('admin.layouts.admin')
@section('content')
    <div class="page-heading">
        <div class="page-title">
            <div class="row">
                <div class="col-12 col-md-6 order-md-1 order-last mb-3">
                    <h3>Quiz</h3>
                </div>
                <div class="col-12 col-md-6 order-md-2 order-first">
                    <nav aria-label="breadcrumb" class="breadcrumb-header float-start float-lg-end">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/admin">Dashboard</a></li>
                            <li class="breadcrumb-item active" aria-current="page">{{ $exam->exam_name }}</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
        @include('alerts.success')
        <div class="col-12 ">
            <div class="card">
                <div class="card-header">
                    <h4>{{ $exam->exam_name }}</h4>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-lg">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Questions</th>
                                    <th>question_point</th>
                                </tr>
                            </thead>
                            <tbody>
                                @php $counter = 1; @endphp
                                @foreach ($questions as $question)
                                    @php
                                        $options = array_map('trim', explode(',', $question->question_options));
                                    @endphp
                                    <tr class="bg-primary text-white">
                                        <td>{{ $counter }}</td>
                                        <td>
                                            {!! $question->question_content !!}
                                        </td>
                                        <td class="col-auto">
                                            <p class=" mb-0">{{ $question->question_point }}</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td class="col-auto">
                                            @foreach ($options as $option)
                                                <p class=" mb-0">
                                                <ul>
                                                    <li>
                                                        {{ $option }}
                                                    </li>
                                                </ul>
                                                </p>
                                            @endforeach
                                        </td>
                                        <td>Correct Answer:
                                            <span style="color: rgb(40, 196, 110)"
                                                class="h5">{{ $question->correct_answer }}</span>
                                        </td>
                                    </tr>
                                    @php $counter++; @endphp
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    @endsection
