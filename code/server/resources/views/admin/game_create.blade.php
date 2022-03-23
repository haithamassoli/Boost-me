@php
$pageName = 'Manage Exams';
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
                <h4 class="card-title">Add Quiz</h4>
            </div>
            <div class="card-content">
                <div class="card-body">
                    <form class="form form-vertical" method="POST" action="{{ route('admin.exams.store') }}"
                        enctype="multipart/form-data">
                        @csrf
                        @include('alerts.fail')
                        <div class="form-body">
                            <div class="row">
                                <div class="col-12 col-md-6">
                                    <div class="form-group has-icon-left">
                                        <label for="first-name-icon">Quiz Name</label>
                                        <div class="position-relative">
                                            <input type="text" name="exam_name" class="form-control" placeholder="Name"
                                                id="first-name-icon">
                                            <div class="form-control-icon">
                                                <i class="fas fa-book"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <div class="form-group has-icon-left">
                                        <label for="email-id-icon">Quiz Descreption</label>
                                        <div class="position-relative">
                                            <input type="text" name="exam_desc" class="form-control"
                                                placeholder="Descreption" id="email-id-icon">
                                            <div class="form-control-icon">
                                                <i class="fas fa-pencil-alt"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <div class="form-group has-icon-left">
                                        <label for="password-id-icon">Number of Questions</label>
                                        <div class="position-relative">
                                            <input type="number" value={{ $exam_num_qus }} name="exam_num_qus"
                                                class="form-control" placeholder="Number of Questions"
                                                id="password-id-icon">
                                            <div class="form-control-icon">
                                                <i class="fas fa-th"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                @php $counter=1; @endphp
                                @for ($i = 0; $i < $exam_num_qus; $i++)
                                    <div class="col-12 col-md-6">
                                        <div class="form-group has-icon-left">
                                            <label for="email-id-icon">Question {{ $counter }} Point</label>
                                            <div class="position-relative">
                                                <input type="text" name="question_point{{ $counter }}"
                                                    class="form-control" placeholder="Question Point" id="email-id-icon">
                                                <div class="form-control-icon">
                                                    <i class="far fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-group has-icon-left">
                                            <label for="email-id-icon">Question {{ $counter }}</label>
                                            <div class="position-relative">
                                                <textarea class="ckeditor" name="question_content{{ $counter }}"
                                                    id="editor"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <div class="form-group has-icon-left">
                                            <label for="email-id-icon">Question {{ $counter }} Options</label>
                                            <div class="position-relative">
                                                <input type="text" name="question_options{{ $counter }}"
                                                    class="form-control" placeholder="split it with ," id="email-id-icon">
                                                <div class="form-control-icon">
                                                    <i class="fas fa-cogs"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <div class="form-group has-icon-left">
                                            <label for="email-id-icon">Correct Answer {{ $counter }}</label>
                                            <div class="position-relative">
                                                <input type="text" name="correct_answer{{ $counter }}"
                                                    class="form-control" placeholder="Correct Answer" id="email-id-icon">
                                                <div class="form-control-icon">
                                                    <i class="fas fa-check"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    @php $counter++; @endphp
                                    <div
                                        style="height: 10px; background-color:rgba(67,94,190,0.5); width:100%; margin:30px 0">
                                    </div>
                                @endfor
                                <div class="col-12 col-md-6">
                                    <div class="form-group has-icon-left">
                                        <label for="password-id-icon">Image</label>
                                        <div class="position-relative">
                                            <label for="image">
                                                <img src="{{ asset('img/Add_Image_icon.png') }}" alt="profile_photo"
                                                    style="cursor: pointer">
                                                <input type="file" id="image" name="exam_img" class="form-control d-none">
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 d-flex justify-content-end">
                                    <button type="submit" class="btn btn-primary me-1 mb-1">Add</button>
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
