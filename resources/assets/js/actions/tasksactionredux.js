import axios from 'axios';

export function _AddTask(name){
    return dispatch => axios.post('/task',{name: name}).then(() => {
            dispatch({type: "ADD_TASK",payload: name});
        })
    }

export function _IndexTask(){
    return dispatch => axios.get('/getAllTask').then((response)=> {
            dispatch({type: "INDEX_TASK",payload: response.data});
        })
    } 
export function _DeleteTask(id){
    return dispatch => axios.delete('/task/'+id).then(()=>{
            dispatch({type: "DELETE_TASK",payload: id});
        })
    }
export function _EditTask(id){
    return dispatch({type: "EDIT_TASK",payload: id});
}

export function _UpdateTask(editname,editID){
    return dispatch => axios.post('/task/'+editID+'/edited',{editname: editname}).then(()=>{
            dispatch({type: "UPDATE_TASK",payload: editname});
        })
    }