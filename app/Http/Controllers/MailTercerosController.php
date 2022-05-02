<?php

namespace App\Http\Controllers;

use App\Mail\TercerosMailable;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Redis;

class MailTercerosController extends Controller
{
    public function send(Request $request)
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
        #Mail::to('contacto@httsiniestros.com')->send(new TercerosMailable($content));

    }

}
