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
    Route::post('/register/device', 'API\AuthController@registerDevice')->name('register.device')->middleware('jwt.auth');
    Route::post('/delete/device', 'API\AuthController@deleteDevice')->name('delete.device')->middleware('jwt.auth');

    Route::post('/store/image', 'API\PicturesController@store')->name('api.store.image')->middleware('jwt.auth');
    Route::post('/reviews/view', 'API\ReviewController@show')->name('api.reviews.show')->middleware('jwt.auth');
    Route::post('/reviews/store', 'API\ReviewController@store')->name('api.reviews.store')->middleware('jwt.auth');
});
