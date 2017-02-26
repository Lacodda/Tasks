<?php

    namespace Tests\Unit;

    use App\Tag;
    use App\Task;
    use Illuminate\Foundation\Testing\DatabaseMigrations;
    use Illuminate\Foundation\Testing\DatabaseTransactions;
    use Tests\TestCase;
    use Tests\Unit\Traits\TestData;

    class TaskTest
        extends TestCase
    {
        use DatabaseTransactions;
        use TestData;

        public function testTaskCanBeCreated ()
        {
            $task = Task::create ($this->testTask[0]);

            $tags = [];

            foreach ($this->testTags[0]['tags'] as $tag)
            {
                array_push ($tags, new Tag(['name' => $tag]));
            }

            $task->tags ()
                 ->saveMany ($tags);

            $latestTask = Task::latest ()
                              ->first ();

            $this->assertEquals ($task->id, $latestTask->id);
            $this->assertEquals ($this->testTask[0]['name'], $latestTask->name);
            $this->assertEquals ($this->testTask[0]['priority'], $latestTask->priority);
            $this->assertEquals ($this->testTask[0]['status'], $latestTask->status);
            $this->assertDatabaseHas ('tasks', $this->testTask[0]);
        }
    }
