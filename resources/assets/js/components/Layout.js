import React from 'react';
import { _AddTask,_DeleteTask,_EditTask,_IndexTask,_UpdateTask } from '../actions/tasksactionredux.js';
import { connect } from 'react-redux';


import Header from './Header.react';
import AddTask from './AddTask.react';
import ShowTask from './ShowTask.react';
import DeleteTask from './DeleteTask.react';
import EditButton from './EditButton.react';
import EditTask from './EditTask.react';

function mapStateToProps(state){
    return { 
        tasks: state.tasks,
        editID: state.editID,
        startID: state.startID
    }
}

class Layout extends React.Component{
    constructor(props){
        super(props);

        this.addNewTask = this.addNewTask.bind(this);
        this.delTask = this.delTask.bind(this);
        this.edtask = this.edtask.bind(this);
        this.updateTask = this.updateTask.bind(this);

    };

    componentWillMount(){
        this.props.dispatch(_IndexTask())
    }
    addNewTask(e){
        this.props.dispatch(_AddTask(e))
    }
    delTask(id){
        this.props.dispatch(_DeleteTask(id))
    }
    edtask(id){
        this.props.dispatch(_EditTask(id))
    }
    updateTask(e){
        this.props.dispatch(_UpdateTask(e,this.props.editID))
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

export default connect(mapStateToProps)(Layout);

