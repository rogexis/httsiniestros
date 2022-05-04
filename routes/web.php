<?php

use App\Mail\BolsaTrabajoMailable;
use App\Mail\TercerosMailable;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use App\Mail\QuejaSugerenciaMailable;


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

Route::post("/queja-sugerencia",  function (Request $request)
{
    # code...
    $content = $request->validate([
        'nombre' => 'required',
        'correo' => 'required',
        'numero' => 'required',
        'comentario' => 'required'
    ]);
    $correo = new QuejaSugerenciaMailable($content);
    Mail::to('contacto@httsiniestros.com')->send($correo);
});

Route::post("/upload-cv",  function (Request $request)
{
    return $request->file("file")->store("cvs");
});


Route::post("/upload-file",  function (Request $request)
{
    $content = $request->validate([
        'nombre' => 'required',
        'correo' => 'required',
        'numero' => 'required',
        'fileName' => 'required'
    ]);
    $correo = new BolsaTrabajoMailable($content);
    Mail::to('contacto@httsiniestros.com')->send($correo);
});
