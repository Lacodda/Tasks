<?php

namespace App\Http\Controllers;

use App\Tag;
use App\Task;
use Illuminate\Http\Request;

/**
 * Class TasksController
 *
 * @package App\Http\Controllers
 */
class TasksController
    extends Controller
{

    /**
     * Display a listing of the resource
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        try {
            $tasks = Task::with('tags')->orderBy('status', 'desc')->orderBy('priority', 'desc')->get();

            return response()->json(['success' => true, 'tasks' => $tasks]);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'error' => $e]);
        }
    }

    /**
     * Store a newly created resource in storage
     *
     * @param Request $request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        try {
            $task = Task::create(
                [
                    'name' => $request->input('name'),
                    'priority' => $request->input('priority'),
                    'status' => $request->input('status') ? $request->input('status') : 0,
                ]
            );

            if (!empty($request->input('tags'))) {
                $tags = [];

                foreach ($request->input('tags') as $tag) {
                    array_push($tags, new Tag(['name' => $tag]));
                }

                $task->tags()->saveMany($tags);
            }

            return response()->json(['success' => true, 'task' => $task]);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'error' => $e]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param         $id
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        try {
            $task = Task::with('tags')->find($id);

            return response()->json(['success' => true, 'task' => $task]);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'error' => $e]);
        }
    }

    /**
     * Update the specified resource in storage
     *
     * @param Request $request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request)
    {
        try {
            $id = $request->input('id');

            $task = Task::find($id);

            $task->priority = $request->input('priority');

            $task->status = $request->input('status') ? $request->input('status') : 0;

            $task->save();

            Tag::where('task_id', '=', $id)->delete();

            if (!empty($request->input('tags'))) {
                $tags = [];

                foreach ($request->input('tags') as $tag) {
                    array_push($tags, new Tag(['name' => $tag]));
                }

                $task->tags()->saveMany($tags);
            }

            return response()->json(['success' => true, 'task' => $task]);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'error' => $e]);
        }
    }

    /**
     * Remove the specified resource from storage
     *
     * @param Request $request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(Request $request)
    {
        try {
            $id = $request->input('id');

            Task::find($id)->delete();

            return response()->json(['success' => true]);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'error' => $e]);
        }
    }

}
