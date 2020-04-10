import React, { createContext, useReducer } from 'react';
import {
	GET_PROJECTS,
	GET_PROJECT,
	ADD_PROJECT,
	ADD_FAILED,
	DELETE_PROJECT,
	DELETE_FAILED,
	EDIT_PROJECT,
	EDIT_FAILED
} from '../actions/types';
import projectsReducer from '../reducers/projects.reducer';
import axios from 'axios';

export const ProjectsContext = createContext();
export const ProjectsActions = createContext();

export const ProjectsProvider = (props) => {
	const initState = {
		projects: null,
		project: null,
		projectsMsg: null
	};

	const [ state, dispatch ] = useReducer(projectsReducer, initState);

	const getProjects = async () => {
		try {
			const res = await axios.get('/api/projects', {
				headers: { Accept: 'application/json' }
			});
			dispatch({
				type: GET_PROJECTS,
				payload: res.data
			});
		} catch (e) {
			console.log(e);
		}
	};

	const addProject = async (project) => {
		try {
			const res = await axios.post('/api/projects/new', project);
			dispatch({
				type: ADD_PROJECT,
				payload: res.datas
			});
		} catch (e) {
			dispatch({
				type: ADD_FAILED,
				payload: e.response.data
			});
		}
	};

	const actions = {
		getProjects,
		addProject
	};

	return (
		<ProjectsContext.Provider value={state}>
			<ProjectsActions.Provider value={actions}>{props.children}</ProjectsActions.Provider>
		</ProjectsContext.Provider>
	);
};
