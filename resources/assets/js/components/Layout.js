import React from 'react';
import * as TaskAction from '../actions/TaskAction.js';
import TaskStores from '../stores/TaskStores.js';

import Header from './Header.react';
import AddTask from './AddTask.react';
import ShowTask from './ShowTask.react';
import DeleteTask from './DeleteTask.react';
import EditButton from './EditButton.react';
import EditTask from './EditTask.react';


export default class Layout extends React.Component{
    constructor(props){
        super(props);

        this.addNewTask = this.addNewTask.bind(this);
        this.delTask = this.delTask.bind(this);
        this.edtask = this.edtask.bind(this);
        this.updateTask = this.updateTask.bind(this);

    };

    componentWillMount(){
        TaskAction._IndexTask();

    }

    addNewTask(e){
        TaskAction._AddTask(e);
        // console.log(this.props.startID)
    }
    delTask(id){
        TaskAction._DeleteTask(id)
        // console.log('del'+id)
    }
    edtask(id){
        TaskAction._EditTask(id);
        // console.log('edit'+id)
        // console.log('editID '+ this.props.editID)
    }
    updateTask(e){
        TaskAction._UpdateTask(e,this.props.editID)
    }

    render(){
        return(
            <div>
                <Header />
                <AddTask 
                    addNewTask = {this.addNewTask} />
                <ShowTask 
                    taskData = {this.props.tasks} 
                    onDelete = {this.delTask}
                    onEdit = {this.edtask}
                />
                {this.props.editID !== -1 && 
                <EditTask 
                    editID = {this.props.editID}
                    taskData = {this.props.tasks}
                    updateTask = {this.updateTask} 
                />}
            </div>
            
        )
    }
}


