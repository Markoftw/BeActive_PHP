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
Route::get('/images/{userID}/{filename}', 'API\PicturesController@imagesPublic')->where('id', '[0-9]+')->name('images.public');

Route::get('/admin/notifications', 'NotificationsController@show')->name('notifications');
Route::get('/admin/notifications/get', 'NotificationsController@getRegistrationIDs')->name('notifications.test');
Route::post('/admin/notifications', 'NotificationsController@broadcast')->name('notifications.broadcast');
Route::get('/admin/notifications/notify/{token}', 'NotificationsController@notify')->name('notifications.notify');
Route::post('/admin/notifications/notify/{token}', 'NotificationsController@sendNotify')->name('notifications.notify.send');
Route::get('/admin/reviews', 'ReviewController@show')->name('admin.reviews.show');
Route::get('/admin/reviews/create', 'ReviewController@showCreate')->name('admin.reviews.create');
Route::post('/admin/reviews/create', 'ReviewController@create')->name('admin.reviews.create.send');

Route::get('/reviews/create', 'API\ReviewController@create')->name('reviews.create');
Route::get('/reviews/show', 'API\ReviewController@show')->name('reviews.show');

Route::get('/roles/create', 'API\AuthController@addRoles')->name('roles.create');
Route::get('/roles/show', 'API\AuthController@getRoles')->name('roles.get');

Route::get('/testing', 'API\AuthController@setPassword')->name('testing');
Route::get('/about', 'AboutController@show')->name('about');
Route::get('/terms', 'TermsController@show')->name('terms');
