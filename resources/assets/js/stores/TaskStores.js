import { EventEmitter } from 'events';
import TaskDispatcher from './dispatcher/TaskDispatcher.js';
// import CHANGE_EVENT from 'change';

class TaskStore extends EventEmitter{
    constructor(){
        super()
        this.state = {tasks:[],editID:-1,startID:0}
    }
    createTask(task) {
        this.state.tasks.push({
            id:startID+1,task:action.payload
        });
        this.emit("change");
    }

    getTask(){
        
    }


    deleteTask(id){
        const  index_del = getIndex(action.payload,state.tasks)
        index_del.splice(index_del,1);
        this.emit("change");

    }
    editTask(){
        this.state.editID.action.payload;

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
                this.getTask(action.task);

            }
            case "DELETE_TASK": {
                this.deleteTask(action.id);
                this.emit("change");
            }
            case "EDIT_TASK": {
                this.editTask(action.task);
            }
            case "UPDATE_TASK": {
                this.updateTask(action.task);

            }
        }
    }
}
function getIndex (value,arr) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i].id === value) {
            return i;
        }
    }
    return -1;        //to handle the case where the value doesn't exist
}

const taskStore = new TaskStore;
TaskDispatcher.register(taskStore.handleActions.bind(taskStore));

export default taskStore;


// var EventEmitter = require('events').EventEmitter;
// var assign = require('object-assign');
// var CHANGE_EVENT = 'change';




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
