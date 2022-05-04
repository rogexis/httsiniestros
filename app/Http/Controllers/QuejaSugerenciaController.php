<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mail\QuejaSugerenciaMailable;
use Illuminate\Support\Facades\Mail;

class QuejaSugerenciaController extends Controller
{
    public function send(Request $request)
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
    }
}
