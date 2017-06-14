import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.react';
import AddTask from './components/AddTask.react';
import ShowTask from './components/ShowTask.react';
import DeleteTask from './components/DeleteTask.react';
import EditButton from './components/EditButton.react';
import EditTask from './components/EditTask.react';


class Total extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskData: this.props.taskData,
            taskInput: '',
            editID:-1
            };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    handleInput(e){
        this.setState({
            taskInput : e
        });
    }
    handleSubmit(e){
        var data = this.state.taskData;
        data.push({id:nextid,task:this.state.taskInput });
         this.setState({
             taskData : data
         });
        nextid = nextid+1;
    }
    handleEdit(e){
        this.setState({
            editID : e
        });
    }
    handleUpdate(e){
        var data = taskData;
        data[getIndex(this.state.editID,data)] = {id: this.state.editID,task:e}
        this.setState({
            taskData : data
        });

    }
    handleDelete(e){
        var data = this.state.taskData;
        var index = data.findIndex(arr => arr.id == e);
        data.splice(index, 1);
        this.setState({
            taskData: data
        });
    }

    render(){
        return(
            <div>
                <Header />
                <AddTask
                    taskInput = {this.state.taskInput}
                    onChangetaskInput = {this.handleInput}
                    onSubmitTask = {this.handleSubmit}
                />
                <ShowTask 
                    taskData = {this.state.taskData}
                    onDelete = {this.handleDelete}
                    onEdit = {this.handleEdit}
                />
                {this.state.editID!== -1 && <EditTask editID = {this.state.editID} taskData={this.state.taskData} handleUpdate={this.handleUpdate}/>}
            </div>

            );

        }
}  
function getIndex (value,arr) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i].id === value) {
            return i;
        }
    }
    return -1;        //to handle the case where the value doesn't exist
}

var taskData = [];
var nextid = 1;


ReactDOM.render(
    <Total taskData = {taskData}/>,
  document.getElementById('task')
);
