@extends('layouts.app')

@section('edit')
    <div class="panel panel-info">
        <div class="panel-body">
            <form action="{{ url('task/'.$etask->id.'/edited') }}"  method="POST" class="form-horizontal">
                <div class="form-group">
                        <h3><lable for="name">Edit Task</label></h3>
                    <div class="col-xs-9">
                        <input type="text" name="editname" id="task-name1" class="form-control">
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-offset-3 col-sm-6">
                        <p align="right">
                            <button trpy="submit" class="btn btn-success active" >
                                <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>Save
                            </button>
                        </p>
                    </div>    
                </div>
                {{ csrf_field() }}
            </form>
        </div>
    </div>
@endsection
