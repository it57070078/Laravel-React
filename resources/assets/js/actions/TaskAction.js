import TaskDispatcher from './dispatcher/TaskDispatcher.js';

export function addTask(){
        TaskDispatcher.dispatch({
            type: "ADD_TASK",
            task,
        });
    }
export function deleteTask(){
        TaskDispatcher.dispatch({
            type: "DELETE_TASK",
            id,
        });

    }
export function editTask(){
        TaskDispatcher.dispatch({
            type: "EDIT_TASK",
            task,
        });
    }
export function indexTask(){
    TaskDispatcher.dispatch({
        type: "INDEX_TASK",
        
    })
}
export function updateTask(){
    TaskDispatcher.dispatch({
        type: "UPDATE_TASK",

    })
}
