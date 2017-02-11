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
    Route::post('login', 'Auth\ApiController@login')->name('api.login');
});

Route::get('/user/login/true', function (Request $request) {

    $data['success'] = true;
    $data['name'] = 'Marko';

    return json_encode($data);
});

Route::post('/user/login/false', function (Request $request) {

    $data['success'] = false;
    $data['name'] = 'Marko';

    return json_encode($data);
});

