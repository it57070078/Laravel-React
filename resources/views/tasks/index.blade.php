@extends('layouts.app')

@section('content')
    <div class="panel panel-info">
        <div class="panel-body">
            @include('commons.errors')
            <form action="{{ url('task') }}"  method="POST" class="form-horizontal">
                <div class="form-group">
                        <h3><lable for="name">Task</label></h3>
                    <div class="col-xs-9">
                        <input type="text" name="name" id="task-name" class="form-control" placeholder="Input Text">
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-offset-3 col-sm-6">
                        <p align="right">
                            <button trpy="submit" class="btn btn-success active" >
                                <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>Add task
                            </button>
                        </p>
                    </div>    
                </div>
                {{ csrf_field() }}
            </form>
        </div>
    </div>

    @if ($tasks->count())
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3>Current tasks</h3>
            </div>
            <div class="panel-body">
                <table class ="table table-striped">
                    <thead>
                        <th><h4>Task</h4></th>
                        <th>&nbsp;</th>
                    </thead>
                    <tbody>
                        @foreach ($tasks as $task)
                            <tr>
                                <td>{{ $task->name }}</td>
                                <td>
                                    <form action="{{ url('task/'.$task->id.'/edit') }}"method="get">
                                        {{ csrf_field() }}
                                        <button type="submit" class="btn btn-warning btn-sm active">
                                            <span class="glyphicon glyphicon-edit" aria-hidden="true"></span>Edit
                                        </button>
                                    </form>
                                        
                                    <form action="{{ url('task/' .$task->id) }}" method="post">
                                        {{ csrf_field() }}
                                        {{ method_field('DELETE') }}
                                        <button type="submit" class="btn btn-danger btn-sm active">
                                            <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>Delete
                                        </button>
                                    </form>
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    @endif
@endsection
