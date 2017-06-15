import TaskDispatcher from './dispatcher/TaskDispatcher.js';
import TaskConstants from './constants/TaskConstants.js';

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var CHANGE_EVENT = 'change';

var _task = {};
var _taskData = [];


class TaskStore extends EventEmitter{
    addTask(task){

    }
    editTask(task){

    }
    deleteTask(id){

    }


handleAcion(action) {
    switch(action.type) {
        case "ADD_TASK": {
            this.addTask(action.task);
            break;
        }
        case "EDIT_TASK": {
            this.editTask(action.task);
            break;
        }
        case "DELETE_TASK": {
            this.deleteTask(action.id);
            break;
        }
    }

}

}







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


TaskDispatcher.register(function(action){
    switch (action.actionType){
        case TaskConstants.Task_ADD:
        addDAta(action.e)
    }

});
