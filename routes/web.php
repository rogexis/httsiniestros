<?php

use App\Mail\TercerosMailable;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

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

// Route::get('/asd', function () {
//     return view('welcome');
// });

// Route::get('/contactanos', function (){
//     $correo = new TercerosMailable;
//     Mail::to('rogexis@gmail.com')->send($correo);
//     return "Correo Enviado!";
//});


Route::get('{any}', function () {
    return view('app');
})->where('any', '.*');

Route::post("/sendmail", function(Request $request)
{
    # code...
        $content = $request->validate([
            'tvehiculo' => 'required',
            'mpago' => 'required',
            'nombre' => 'required',
            'correo' => 'required',
            'ncontacto' => 'required'
        ]);
        $correo = new TercerosMailable($content);
        Mail::to('contacto@httsiniestros.com')->send($correo);
});

