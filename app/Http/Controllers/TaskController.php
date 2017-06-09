<?php

namespace App\Http\Controllers;

use App\Task;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Validator;


class TaskController extends Controller {

    public function index(){
        $tasks = Task::orderBy('created_at', 'asc')->get();

        return view('tasks.index', ['tasks' => $tasks,]);
    }

    public function create(Request $request) {

        $validator = Validator::make($request->all(), [
            'name' => 'required|max:255',
        ]);

        if ($validator->fails()){
            return redirect('/')
                ->withInput()
                ->withErrors($validator);
        }

        $task = new Task;
        $task->name = $request->name;
        $task->save();

         return redirect('/');
    }

     public function edit(Task $task) {
         $etask = $task;
         $tasks = Task::orderBy('created_at', 'asc')->get();
         return view('edits.edit' ,compact('etask','tasks'));

     }

     public function update(Request $request,Task $task) {

         $validator = Validator::make($request->all(), [
            'editname' => 'required|max:255',
        ]);

        if ($validator->fails()){
            return redirect('/task/{task}/edit')
                ->withInput()
                ->withErrors($validator);
        }


         $task->name = $request->editname;
         $task->save();
         return redirect('/'); 
     }


    //  }
    public function delete(Task $task) {
        $task->delete();
        return redirect('/');

    }

}


