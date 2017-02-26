<?php

    namespace App;

    use Illuminate\Database\Eloquent\Model;

    /**
     * Class Tag
     *
     * @package App
     */
    class Tag
        extends Model
    {
        /**
         * @var string
         */
        protected $table = 'tags';

        /**
         * @var array
         */
        protected $fillable = [
            'name',
        ];

        /**
         * @return mixed
         */
        public function task ()
        {
            return $this->belongsTo ('App\Task');
        }
    }
