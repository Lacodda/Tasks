import axios from "axios";

import { API, API_KEY, SUCCESS_FETCH_TASKS, SUCCESS_FETCH_TASK, SUCCESS_STORE_TASK, SUCCESS_UPDATE_TASK, SUCCESS_DELETE_TASK } from "../settings";

export const fetchTasks = () => dispatch => {
	axios.get(`${API}/tasks${API_KEY}`).then((response) => {
		console.log('SUCCESS_FETCH_TASKS response', response.data);
		dispatch({
			type: SUCCESS_FETCH_TASKS,
			payload: response.data
		})
	});
};

export const fetchTask = (id) => dispatch => {
	axios.get(`${API}/tasks/${id}${API_KEY}`).then((response) => {
		console.log('SUCCESS_FETCH_TASK response', response.data);
		dispatch({
			type: SUCCESS_FETCH_TASK,
			payload: response.data
		})
	});
};

export const storeTask = (props) => dispatch => {
	axios.post(`${API}/tasks/store${API_KEY}`, props).then((response) => {
		console.log('SUCCESS_STORE_TASK response', response.data);
		dispatch({
			type: SUCCESS_STORE_TASK,
			payload: response.data
		})
	});
};

export const updateTask = (props) => dispatch => {
	axios.put(`${API}/tasks/update${API_KEY}`, props).then((response) => {
		console.log('SUCCESS_UPDATE_TASK response', response.data);
		dispatch({
			type: SUCCESS_UPDATE_TASK,
			payload: response.data,
		})
	});
};

export const deleteTask = (props, index) => dispatch => {
	let data=new URLSearchParams();
	data.append('id', props.id);
	axios.delete(`${API}/tasks/destroy${API_KEY}`, {data: data}).then((response) => {
		console.log('SUCCESS_DELETE_TASK response', response.data);
		dispatch({
			type: SUCCESS_DELETE_TASK,
			payload: response.data,
			index: index
		})
	});
};