<?php

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

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/apk', 'APKController@showAll')->name('apklisting');
Route::get('/apk/download/{filename}', 'APKController@download')->name('apkdownload');

Route::get('/gallery', 'API\PicturesController@getAll')->name('gallery');
Route::get('/gallery/manage', 'API\PicturesController@manage')->name('images.manage');
Route::get('/gallery/delete/{filename}', 'API\PicturesController@delete')->name('images.delete');
Route::get('/images/{filename}', 'API\PicturesController@images')->name('images');

Route::get('/admin/notifications', 'NotificationsController@show')->name('notifications');
Route::post('/admin/notifications', 'NotificationsController@broadcast')->name('notifications.broadcast');
