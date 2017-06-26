import React from 'react';

export default class EditTask extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            text: ''
        }
        this.updateTask = this.updateTask.bind(this);

    }
    updateTask(e){
        this.props.updateTask(e.target.value);
        this.setState({
            text:''
        })

    }


    render(){
        return (
            <div className ="container">
                <div className="panel panel-default">
                    <div className="panel-heading">Edit Task</div>
                        <div className = "panel-body">
                            <label> Task : </label>
                                <form className = "form-horizontal" onChange = {this.updateTask}>
                                    <div className ="col-xs-9">
                                        <input type="text" value={this.props.taskData[getIndex(this.props.editID, this.props.taskData)].name} className = "form-control"/>
                                        <button type="submit" className="btn btn-success active" >
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

function getIndex (value,arr) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i].id === value) {
            return i;
        }
    }
    return -1;        //to handle the case where the value doesn't exist
}

