<?php

use App\Ticket;
use Carbon\Carbon;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTicketsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tickets', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('ticket_group');
            $table->integer('user_id')->unsigned(); // user_id poster
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->integer('agent_id')->unsigned();
            $table->foreign('agent_id')->references('id')->on('users')->onDelete('cascade');
            $table->string('title'); // Podpora, Mobilna aplikacija, ...
            $table->string('naslov');
            $table->text('message');
            $table->string('status'); // Active, Closed, ...
            $table->timestamp('closed_at')->nullable();
            $table->timestamps();
        });

        Ticket::create([
            'ticket_group' => 0,
            'user_id' => 1,
            'agent_id' => 3,
            'title' => 'Podpora',
            'naslov' => 'hello',
            'message' => 'Hello world!',
            'status' => 'Zaprto',
            'closed_at' => Carbon::now()
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tickets');
    }
}
