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

Route::post('exam/create', [App\Http\Controllers\api\showExamController::class, 'create']);
Route::post('exam/done', [App\Http\Controllers\api\showExamController::class, 'done']);
Route::get('exam/{id}', [App\Http\Controllers\api\showExamController::class, 'index']);