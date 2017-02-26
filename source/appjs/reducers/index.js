import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { routerReducer } from 'react-router-redux';

import tasks from "./tasks";

const rootReducer=combineReducers(
	{
		routing: routerReducer,
		tasks: tasks,
		form:  formReducer
	}
);

export default rootReducer;
