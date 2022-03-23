@if (Session::has('success'))
    <div class="alert alert-success text-center" role="alert">
        {{ Session::get('success') }}
    </div>
@endif
