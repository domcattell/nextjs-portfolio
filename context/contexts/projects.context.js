import React, { createContext, useReducer } from 'react';
import {
	GET_PROJECTS,
	GET_PROJECT,
	ADD_PROJECT,
	ADD_FAILED,
	DELETE_PROJECT,
	DELETE_FAILED,
	EDIT_PROJECT,
	EDIT_FAILED,
	CLEAR_MSG,
	GET_PROJECTS_FAILED,
	GET_PROJECT_FAILED,
	CLEAR_PROJECT
} from '../actions/types';
import projectsReducer from '../reducers/projects.reducer';
import axios from 'axios';

export const ProjectsContext = createContext();
export const ProjectsActions = createContext();

export const ProjectsProvider = (props) => {
	const initState = {
		projects: [],
		project: {},
		projectsMsg: ''
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
			dispatch({
				type: GET_PROJECTS_FAILED,
				payload: e.response.data
			})
		}
	};

	const getProject = async (projectURL) => {
		try {
			const res = await axios.get(`/api/projects/${projectURL}`);
			dispatch({
				type: GET_PROJECT,
				payload: res.data
			});
		} catch (e) {
			dispatch({
				type: GET_PROJECT_FAILED,
				payload: e.response.data
			})
		}
	}

	const addProject = async (project) => {
		try {
			const res = await axios.post('/api/projects/new', project);
			dispatch({
				type: ADD_PROJECT,
				payload: res.data
			});
		} catch (e) {
			dispatch({
				type: ADD_FAILED,
				payload: e.response.data
			});
		}
	};

	const editProject = async (project) => {
		try {
			const res = await axios.post(`/api/project/${projectURL}`, project);
			dispatch({
				type: EDIT_PROJECT,
				payload: res.data,
			});
		} catch (err) {
			dispatch({
				type: EDIT_FAILED,
				payload: err.response.data
			});
		};
	};

	const clearProjectMsg = () => {
		dispatch({ type: CLEAR_MSG });
	};

	const clearProject = () => {
		dispatch({type: CLEAR_PROJECT})
	}

	const actions = {
		getProjects,
		getProject,
		addProject,
		editProject,
		clearProjectMsg,
		clearProject,
	};

	return (
		<ProjectsContext.Provider value={state}>
			<ProjectsActions.Provider value={actions}>{props.children}</ProjectsActions.Provider>
		</ProjectsContext.Provider>
	);
};
