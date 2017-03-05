<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class InterestNotice extends Mailable
{
    use Queueable, SerializesModels;

    public $interest;

    /**
     * Create a new message instance.
     *
     */
    public function __construct($interest)
    {
        $this->interest = $interest;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('emails.povprasevanje');
    }
}
