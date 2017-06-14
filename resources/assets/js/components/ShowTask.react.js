import React from 'react';
import EditButton from './EditButton.react';
import DeleteTask from './DeleteTask.react';


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

export default ShowTask