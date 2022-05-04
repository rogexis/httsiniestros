<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\BolsaTrabajoMailable;

class BolsaTrabajoController extends Controller
{
    function send(Request $request)
{
    $content = $request->validate([
        'nombre' => 'required',
        'correo' => 'required',
        'numero' => 'required',
        'file' => 'required'
    ]);
    $correo = new BolsaTrabajoMailable($content);
    Mail::to('contacto@httsiniestros.com')->send($correo);
}
}
