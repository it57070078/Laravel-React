import React from 'react';

export default class DeleteTask extends React.Component{
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
        );
    };
}