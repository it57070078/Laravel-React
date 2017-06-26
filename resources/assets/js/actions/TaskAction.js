// import dispatcher from '../dispatcher.js';
// import axios from 'axios';


// export function _AddTask(name){
//     return (dispatch) => {axios.post('/task',{name: name}).then(() => {
//             dispatcher.dispatch({type: "ADD_TASK",payload: name});
//         })
//     }
// }

// export function _IndexTask(){
//     return axios.get('/getAllTask').then((response)=> {
//             dispatcher.dispatch({type: "INDEX_TASK",payload: response.data});
//         })
//     } 
// export function _DeleteTask(id){
//     return axios.delete('/task/'+id).then(()=>{
//             dispatcher.dispatch({type: "DELETE_TASK",payload: id});
//         })
//     }
// export function _EditTask(id){
//     return dispatcher.dispatch({type: "EDIT_TASK",payload: id});
// }

// export function _UpdateTask(editname,editID){
//     return axios.post('/task/'+editID+'/edited',{editname: editname}).then(()=>{
//             dispatcher.dispatch({type: "UPDATE_TASK",payload: editname});
//         })
//     }