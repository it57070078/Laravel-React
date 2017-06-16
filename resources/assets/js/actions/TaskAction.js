import TaskDispatcher from './dispatcher/TaskDispatcher.js';
import axios from 'axios';

export function addTask(task){
    axios.post('/task',{task: task}).then(()=> {
        TaskDispatcher.dispatch({
            type: "ADD_TASK",
            payload: task,
        });
    })
}
export function indexTask(){
    axios.get('/').then((response)=> {
        TaskDispatcher.dispatch({
            type: "INDEX_TASK",
            payload: response.data
        });
    })
}
export function deleteTask(id){
    axios.delete('/task/{task}',{id: id}).then(()=>{
        TaskDispatcher.dispatch({
            type: "DELETE_TASK",
            payload: id,
        });
    })
}
export function editTask(id){
        TaskDispatcher.dispatch({
            type: "EDIT_TASK",
            payload: id,
        });
    }

export function updateTask(editedTask,editID){
    axios.post('/task/{task}/edited',{editedTask: editedTask}).then(()=>{
        TaskDispatcher.dispatch({
            type: "UPDATE_TASK",
           payload: editedTask,
        });
    })
}