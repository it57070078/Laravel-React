<?php

use App\Task;
use Illuminate\Http\Request;

Route::get('/',function(){
    return view('redux');
});

Route::get('/getAllTask', 'TaskController@getAllTask');

Route::post('/task', 'TaskController@create'); 

Route::delete('/task/{task}', 'TaskController@delete'); 

Route::get('/task/{task}/edit', 'TaskController@edit');

Route::post('/task/{task}/edited', 'TaskController@update');

