import React from 'react';

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

export default EditButton