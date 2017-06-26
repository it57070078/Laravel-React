import update from 'react-addons-update';
import ActionTypes from '../constants/ActionTypes.js';

export default function TaskReducer (state ={
            tasks: [],
            editID: -1,
            startID: 0,},action){
        switch(action.type){
            case ActionTypes.ADD_TASK :{
                return update(state,{
                    tasks: {$push: [{id: state.startID+1 , name: action.payload}]},
                    startID: {$set:state.startID+1}
                });
            }
            case ActionTypes.INDEX_TASK :{
                const showindex = action.payload.tasks[action.payload.tasks.length-1].id
                return update(state,{
                    tasks: {$set: action.payload.tasks}, 
                    startID: {$set: showindex}
                });
            }
            case ActionTypes.DELETE_TASK :{
                const index_del = getIndex(action.payload,state.tasks)
                return update(state,{
                    tasks: {$splice: [[index_del,1]]}
                });
            }
            case ActionTypes.EDIT_TASK :{
                return update(state,{
                    editID: {$set: action.payload}
                });
            }
            case ActionTypes.UPDATE_TASK :{
                state.tasks[getIndex(state.editID,state.tasks)] = action.payload
                // const index_edit = getIndex(state.editID,state.tasks)
                // var temp = state.tasks
                // temp[index_edit].name = action.payload
                return update(state,{
                    editID: {$set: -1},
                    tasks: {set: state.tasks}
                });
            }
            default:
                return state;

        }
    }

function getIndex (value,arr) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i].id === value) {
            return i;
        }
    }
    return -1;
}