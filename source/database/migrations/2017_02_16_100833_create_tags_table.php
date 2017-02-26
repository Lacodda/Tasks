<?php

    use Illuminate\Database\Migrations\Migration;
    use Illuminate\Database\Schema\Blueprint;
    use Illuminate\Support\Facades\Schema;

    class CreateTagsTable
        extends Migration
    {
        /**
         * Run the migrations.
         *
         * @return void
         */
        public function up ()
        {
            Schema::create (
                'tags',
                function (Blueprint $table)
                {
                    $table->increments ('id');
                    $table->timestamps ();
                    $table->char ('task_id', 36);
                    $table->foreign ('task_id')
                          ->references ('id')
                          ->on ('tasks')
                          ->onDelete ('cascade');
                    $table->string ('name');
                }
            );
        }

        /**
         * Reverse the migrations.
         *
         * @return void
         */
        public function down ()
        {
            Schema::dropIfExists ('tags');
        }
    }
