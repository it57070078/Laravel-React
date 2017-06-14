import React from 'react';
import ReactDOM from 'react-dom';


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
                <AddForm
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


function Header () {
    return (
        <div className="container">
                <nav className="navbar navbar-default">
                    <a className="navbar-brand">
                        Task List
                    </a>
                    <div className="col-md-4">
                        <div className="text-right">
                            <button type="button" className="btn btn-default btn-md">
                            <span className="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span> 
                            </button>  
                        </div> 
                    </div>
                </nav>
        </div>
    );
}

class AddForm extends React.Component {
    constructor(props) {
        super(props);

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
     }

     handleInput(e){
         this.props.onChangetaskInput(e.target.value);
     }
     handleSubmit(e){
         e.preventDefault();
         this.props.onSubmitTask();
     }
    
     render() {
         return (
            <div className = "container">
                <div className="panel panel-default">
                    <div className="panel-heading"><h4><label> New Task </label></h4></div>
                            <div className="panel-body">
                                <label>Task</label>
                                    <form className="form-horizontal" onSubmit = {this.handleSubmit} >
                                        <div className="col-sm-12 form-group">                             
                                            <input type="text" placeholder="Input Text" value={this.props.taskInput} onInput={this.handleInput} className="form-control"/>
                                        </div>
                                            <button type="submit" className="btn btn-success btn-md active"><span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
                                            Add Task
                                            </button>
                                    </form>
                            </div>
                </div>
            </div>
         );
     }
 }

class ShowTask extends React.Component{
    render() {
        var currentTask = [];
        if(this.props.taskData.length === 0) {
            return <div></div>
        }
        this.props.taskData.map((sometask) => currentTask.push(
            <tr key={sometask.id}>
                <td className="table-text">
                    <div>{sometask.task}</div>
                </td>
                <td>
                    <div><EditButton onEdit={this.props.onEdit} id={sometask.id}/></div><div><DeleteTask onDelete = {this.props.onDelete} id={sometask.id} /></div> 
                </td>
                </tr>
        )
        );
        return (
            <div className = "container">
                <div className = "panel panel-default">
                    <div className = "panel-heading"><h3><label>Current Tasks</label></h3></div>
                        <div className = "panel-body">
                            <table className="table table-striped">
                                <thead>
                                    <th><h4>Task</h4></th>
                                    <th>&nbsp;</th>
                                </thead>
                                <tbody>
                                    {currentTask}
                                </tbody>
                            </table>
                        </div>
                </div>    
            </div>

        );
    }
}

class DeleteTask extends React.Component{
    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleDelete(e){
        e.preventDefault();
        this.props.onDelete(this.props.id);
    }
    render(){
        return (
            <form onSubmit = {this.handleDelete}>
                <button type = "submit" className = "btn btn-danger btn-sm col-xs-2 active">
                    <span className = "glyphicon glyphicon-trash" aria-hidden="true"></span>
                    Delete
                </button>
            </form>
        )
    }
}

class EditButton extends React.Component{
    constructor(props){
        super(props);
        this.handleEdit = this.handleEdit.bind(this);
    }
    handleEdit(e){
        e.preventDefault();
        this.props.onEdit(this.props.id);
    }
    render(){
        return (
            <form onSubmit = {this.handleEdit}>      
                <button type="submit" className="btn btn-warning col-xs-2 btn-sm active">
                    <span className="glyphicon glyphicon-edit" aria-hidden="true"></span>
                    Edit
                </button>
            </form>
        );
    };
}

class EditTask extends React.Component{
    constructor(props){
        super(props);
        this.handleUpdate = this.handleUpdate.bind(this);
    }


    handleUpdate(e){
        this.props.handleUpdate(e.target.value);
    }
    render(){
        return (
            <div className ="container">
                <div className="panel panel-default">
                    <div className="panel-heading">Edit Task</div>
                        <div className = "panel-body">
                            <label> Task : </label>
                                <form className = "form-horizontal" onSubmit={this.handleSubmit}>
                                    <div className ="col-xs-9">
                                        <input type="text" onChange={this.handleUpdate} value={this.props.taskData[getIndex(this.props.editID, this.props.taskData)].task} className = "form-control"/>
                                        <button type="submit" className="btn btn-success active">
                                        <span className="glyphicon glyphicon-ok" aria-hidden="true"></span>Save
                                        </button>
                                    </div>
                                        
                                </form>
                                
                        </div>
                </div>
            </div>

        )
    }

}

var taskData = [];
var nextid = 1;


ReactDOM.render(
    <Total taskData = {taskData}/>,
  document.getElementById('task')
);
