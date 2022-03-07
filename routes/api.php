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

Route::namespace('Api')->group(function(){
    Route::post('login', [App\Http\Controllers\LoginController::class, 'index'])->name('login');
    Route::post('logout', [App\Http\Controllers\LoginController::class, 'logout'])->name('logout');
    Route::get('get_subject', [App\Http\Controllers\LoginController::class, 'getSubject'])->name('get_subject');
    Route::post('get_user_subject', [App\Http\Controllers\LoginController::class, 'getUserSubject'])->name('get_user_subject');
    Route::post('store_subject', [App\Http\Controllers\LoginController::class, 'storeSubject'])->name('store_subject');    
});
