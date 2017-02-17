<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix' => 'user'], function() {
    Route::post('/login', 'API\AuthController@login')->name('api.login');
    Route::post('/login/user', 'API\AuthController@getUser')->name('api.loginuser')->middleware('jwt.auth');
    Route::get('/data', 'API\AuthController@getData')->name('api.userdata')->middleware('jwt.auth');
    Route::post('/store/image', 'API\PicturesController@store')->name('api.storeimage')->middleware('jwt.auth');
});
