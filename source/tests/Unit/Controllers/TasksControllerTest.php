<?php

namespace Tests\Unit\Controllers;

use App\Tag;
use App\Task;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;
use Tests\Unit\Traits\TestData;

/**
 * Class TasksControllerTest
 *
 * @package Tests\Unit\Controllers
 */
class TasksControllerTest
    extends TestCase
{
    use DatabaseTransactions;
    use TestData;

    /**
     *
     */
    public function testIndex()
    {
        $this->call('POST', '/api/v1/tasks/store', array_merge($this->testTask[0], $this->testTags[0]));

        $response = $this->call('GET', '/api/v1/tasks');

        $response->assertStatus(200)
            ->assertJson(
                [
                    'success' => true,
                ]
            );

        $this->assertDatabaseHas('tasks', $this->testTask[0]);
    }

    /**
     *
     */
    public function testStore()
    {
        $response = $this->call('POST', '/api/v1/tasks/store', array_merge($this->testTask[0], $this->testTags[0]));

        $response->assertStatus(200)
            ->assertJson(
                [
                    'success' => true,
                ]
            );

        $this->assertDatabaseHas('tasks', $this->testTask[0]);
    }

    /**
     *
     */
    public function testShow()
    {
        $task = Task::create($this->testTask[0]);

        $response = $this->call('GET', '/api/v1/tasks/' . $task->id);

        $response->assertStatus(200)
            ->assertJson(
                [
                    'success' => true,
                ]
            );

        $this->assertDatabaseHas('tasks', $this->testTask[0]);
    }

    /**
     *
     */
    public function testUpdate()
    {
        $task = Task::create($this->testTask[0]);

        $tags = [];

        foreach ($this->testTags[0]['tags'] as $tag) {
            array_push($tags, new Tag(['name' => $tag]));
        }

        $task->tags()
            ->saveMany($tags);

        $update = array_merge(['id' => $task->id], $this->testTask[1], $this->testTags[1]);

        $response = $this->call('PUT', '/api/v1/tasks/update', $update);

        $response->assertStatus(200)
            ->assertJson(
                [
                    'success' => true,
                ]
            );
        $this->assertDatabaseHas('tasks', $this->testTask[1]);
    }

    /**
     *
     */
    public function testDestroy()
    {
        $task = Task::create($this->testTask[0]);

        $tags = [];

        foreach ($this->testTags[0]['tags'] as $tag) {
            array_push($tags, new Tag(['name' => $tag]));
        }

        $task->tags()
            ->saveMany($tags);

        $destroy = array_merge(['id' => $task->id]);

        $response = $this->call('DELETE', '/api/v1/tasks/destroy', $destroy);

        $response->assertStatus(200)
            ->assertJson(
                [
                    'success' => true,
                ]
            );
        $this->assertDatabaseMissing('tasks', ['id' => $task->id]);
    }
}
