import saveStatusTasks from '../../api/saveStatusTasks';

const EnumStateOfTask = {
    NOT_COMPLETE: 0,
    COMPLETE_UPDATE_TIME: 1,
    COMPLETE_UPDATE_IMAGE: 2,
    COMPLETE_UPDATE_ALL: 3
};

class Task {
    constructor(fuCommandID, fuID, actionID, status) {
        this.fuCommandID = fuCommandID;
        this.fuID = fuID;
        this.actionID = actionID;
        this.status = status;
    }
}

const arrayTask = [];

function checkId(arr, id) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === id) {
            return arr[i];
        }
    }
    return null;
}

const InforTaskReducer = (state = arrayTask, action) => {
    if(action.type === 'COMPLETE_UPDATE_TIME'){
        let task = checkId(state, action.id);
        if (task) {
            task.status = EnumStateOfTask.COMPLETE_UPDATE_TIME;
        }
        const task = new Task(action.fuCommandID, action.fuID, action.actionID, EnumStateOfTask.COMPLETE_UPDATE_TIME);
        const xstate = [task].concat(state);
        saveStatusTasks(xstate);
        return xstate;
    }

    if(action.type === 'COMPLETE_UPDATE_IMAGE'){
        
    }
}