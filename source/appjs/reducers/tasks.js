import { SUCCESS_FETCH_TASKS, SUCCESS_FETCH_TASK, SUCCESS_STORE_TASK, SUCCESS_UPDATE_TASK, SUCCESS_DELETE_TASK } from "../settings";

const initialState={
	all: [],
	task: null
};

export default function(state=initialState, action){
	switch(action.type){
		case SUCCESS_FETCH_TASKS:
			console.log('SUCCESS_FETCH_TASKS', action.payload);
			if(action.payload.success){
				return {
					...state,
					all: action.payload.tasks
				};
			}else{
				return {
					...state,
					all: []
				};
			}
		case SUCCESS_FETCH_TASK:
			console.log('SUCCESS_FETCH_TASK', action.payload);
			if(action.payload.success){
				return {
					...state,
					task: action.payload.task
				};
			}else{
				return {
					...state,
					task: null
				};
			}
		case SUCCESS_STORE_TASK:
			console.log('SUCCESS_STORE_TASK', action.payload);
			if(action.payload.success){
				return {
					...state,
					all: [...state.all, action.payload.task]
				};
			}else{
				return {
					...state,
					all: []
				};
			}
		case SUCCESS_UPDATE_TASK:
			console.log('SUCCESS_UPDATE_TASK', action.payload);
			if(action.payload.success){
				return {
					all: [...state.all.filter((_, i) => i!==action.payload.task.id), action.payload.task]
				};
			}else{
				return {
					...state,
					all: []
				};
			}
		case SUCCESS_DELETE_TASK:
			console.log('SUCCESS_DELETE_TASK', action.payload);
			if(action.payload.success){
				return {
					all: state.all.filter((_, i) => i!==action.index)
				};
			}else{
				return {
					...state,
					all: []
				};
			}
		default:
			return state;
	}
}