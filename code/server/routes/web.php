<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\UserController;
use App\Http\Controllers\GameController;
use App\Http\Controllers\CategoryController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Auth::routes();

Route::get('/', function () {
    return view('auth.login');
})->middleware('guest');


// for admin
Route::name('admin.')->prefix('admin')->group(function () {
    Route::get('/', function () {
        return view('admin.index');
    })->name('dashboard');
    Route::resource('users', UserController::class);
    Route::resource('games', GameController::class);
    Route::resource('categories', CategoryController::class);
});

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');