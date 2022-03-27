<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('exam/create', [App\Http\Controllers\api\GamesController::class, 'create']);
Route::post('exam/done', [App\Http\Controllers\api\GamesController::class, 'done']);
Route::get('games', [App\Http\Controllers\api\GamesController::class, 'index']);
Route::get('option', [App\Http\Controllers\api\GamesController::class, 'getOption']);
Route::get('game/{id}', [App\Http\Controllers\api\GamesController::class, 'show']);
Route::post('signup', [App\Http\Controllers\api\AuthController::class, 'signup']);
Route::post('login', [App\Http\Controllers\api\AuthController::class, 'login']);


Route::group(["middleware" => ["auth:sanctum"]], function(){
    Route::post('buy', [App\Http\Controllers\api\GamesController::class, 'buy']);
    Route::post('logout', [App\Http\Controllers\api\AuthController::class, 'logout']);
   
});
