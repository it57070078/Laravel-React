import React from 'react';


class AddTask extends React.Component {
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

export default AddTask