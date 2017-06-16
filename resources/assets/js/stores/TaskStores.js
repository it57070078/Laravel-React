import { EventEmitter } from 'events';

import TaskDispatcher from './dispatcher/TaskDispatcher.js';
// import CHANGE_EVENT from 'change';

class TaskStore extends EventEmitter{
    constructor(){
        super()
        this.tasks = [
            {
                id: +'',task:''
            }
        ]
    }
    createTask(task) {
        this.tasks.push({
            id,
            task
        });

        this.emit("change");
    }

    getIndex(){
        
    }
    deleteTask(){

    }
    editTask(){

    }
    updateTask(){

    }

    handleActions(action) {
        switch(action.type){
            case "ADD_TASK": {
                this.createTask(action.task);
                this.emit("change");
                break;
            }
            case "INDEX_TASK": {

            }
            case "DELETE_TASK": {

            }
            case "EDIT_TASK": {

            }
            case "UPDATE_TASK": {

            }
        }
    }
}

const taskStore = new TaskStore;
TaskDispatcher.register(taskStore.handleActions.bind(taskStore));

export default taskStore;


// var EventEmitter = require('events').EventEmitter;
// var assign = require('object-assign');
var CHANGE_EVENT = 'change';

// var _store = {
//     _taskData: [],
// };


// class TaskStore extends EventEmitter{
//     addTask(task){

//     }
//     editTask(task){

//     }
//     deleteTask(id){

//     }


// handleAcion(action) {
//     switch(action.type) {
//         case "ADD_TASK": {
//             this.addTask(action.task);
//             break;
//         }
//         case "EDIT_TASK": {
//             this.editTask(action.task);
//             break;
//         }
//         case "DELETE_TASK": {
//             this.deleteTask(action.id);
//             break;
//         }
//     }

// }

// }


// var TaskStore = assign({}, EventEmitter.prototype, {
//     getState(){
//         return _task;
//     },

//     getAll(){
//         return _taskData;
//     },
//     emitChange(){
//         this.emit(CHANGE_EVENT);
//     },
//     addChangeListener(callback){
//         this.on(CHANGE_EVENT, callback);
//     },
//     removeChangeListener(callback){
//         this.removeListener(CHANGE_EVENT, callback);
//     }
// });


// TaskDispatcher.register(function(action){
//     switch (action.actionType){
//         case TaskConstants.Task_ADD:
//         addDAta(action.e)
//     }

// });
