<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTasksTable
    extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create(
            'tasks',
            function (Blueprint $table) {
                $table->uuid('id');
                $table->primary('id');
                $table->timestamps();
                $table->string('name');
                $table->integer('priority');
                $table->boolean('status')
                    ->default(true);
            }
        );
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tasks');
    }
}
