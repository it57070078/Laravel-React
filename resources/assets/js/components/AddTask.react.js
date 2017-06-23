import React from 'react';
export default class AddTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
        this.submitNewTask = this.submitNewTask.bind(this);
        this.onChangeText = this.onChangeText.bind(this);
     }

     submitNewTask(e){
         e.preventDefault()
         this.props.addNewTask(this.state.text)
         this.setState({
            text: ''
        })
     }
     onChangeText(e){
        this.setState({
            text: e.target.value
        })

     }

    render() {
        return (
            <div className = "container">
                <div className="panel panel-default">
                    <div className="panel-heading"><h4><label> New Task </label></h4></div>
                            <div className="panel-body">
                                <label>Task</label>
                                    <form className="form-horizontal" onSubmit = {this.submitNewTask} >
                                        <div className="col-sm-12 form-group">                             
                                            <input type="text" placeholder="Input Text" value={this.state.text} onChange={this.onChangeText} className="form-control"/>
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

