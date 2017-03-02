const {mix} = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

/*mix.js('resources/assets/js/app.js', 'public/js')
 .sass('resources/assets/sass/app.scss', 'public/css');*/

mix.js([
    'resources/assets/js/jquery-2.1.0.min.js',
    'resources/assets/js/highstock.js',
    'resources/assets/js/bootstrap.min.js',
    'resources/assets/js/jquery.history.js',
    'resources/assets/js/jQueryRotate.2.2.js',
    'resources/assets/js/rw.js',
    'resources/assets/js/rw_alpha.js',
    'resources/assets/js/socket.io.min.js'
], 'public/js/app.js');

mix.combine([
    'resources/assets/css/bootstrap.min.css',
    'resources/assets/css/rw-theme.css',
], 'public/css/app.css');

