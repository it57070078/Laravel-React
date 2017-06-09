<?php

use App\Task;
use Illuminate\Http\Request;

Route::get('/',function(){
	return view('firstreact');
});

/*Route::get('/', 'TaskController@index')*;/// {
    //     $tasks = Task::orderBy('created_at', 'asc')->get();

    //     return view('tasks.index', [
    //         'tasks' => $tasks,
    //     ]);
    // });
    //});

Route::post('/task', 'TaskController@create'); //{
        // $validator = Validator::make($request->all(), [
        //     'name' => 'required|max:255',
        // ]);

        // if ($validator->fails()){
        //     return redirect('/')
        //         ->withInput()
        //         ->withErrors($validator);
        // }

        // $task = new Task;
        // $task->name = $request->name;
        // $task->save();

        // return redirect('/');

    // });

Route::delete('/task/{task}', 'TaskController@delete'); //{
//     $task->delete();
//     return redirect('/');
    
// });


Route::get('/task/{task}/edit', 'TaskController@edit');

Route::post('/task/{task}/edited', 'TaskController@update');

