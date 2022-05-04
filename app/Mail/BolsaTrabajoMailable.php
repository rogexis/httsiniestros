<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class BolsaTrabajoMailable extends Mailable
{
    use Queueable, SerializesModels;

    public $subject = "ALGUIEN QUIERE UNIRSE AL EQUIPO!";
    public $content;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($content)
    {
        $this->content = $content;

    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('emails.bolsaTrabajo')->attach(public_path("../storage/app/".$this->content['fileName']));
    }
}
