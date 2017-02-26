<?php

    namespace App;

    use Illuminate\Database\Eloquent\Model;

    /**
     * Class Task
     *
     * @package App
     */
    class Task
        extends Model
    {
        use Traits\Uuids;

        /**
         * Indicates if the IDs are auto-incrementing.
         *
         * @var bool
         */
        public $incrementing = false;

        /**
         * @var string
         */
        protected $table = 'tasks';

        /**
         * The attributes that are mass assignable.
         *
         * @var array
         */
        protected $fillable = [
            'name',
            'priority',
            'status',
        ];

        /**
         * @return mixed
         */
        public function tags()
        {
            return $this->hasMany('App\Tag');
        }
    }
