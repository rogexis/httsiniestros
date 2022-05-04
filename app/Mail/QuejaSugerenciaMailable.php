<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class QuejaSugerenciaMailable extends Mailable
{
    use Queueable, SerializesModels;

    
    public $subject = "¡QUEJAS Y SUGERENCIAS! Es momento de mejorar.";
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
        return $this->view('emails.quejaSugerencia');
    }
}
