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

const reducer = (state, action) => {
	switch (action.type) {
		case GET_PROJECTS:
			return {
				...state,
				projects: action.payload
			};

		case GET_PROJECT:
			return {
				...state,
				project: action.payload
			};

		case ADD_PROJECT:
			return {
				...state,
				projects: [ ...state.projects, action.payload ]
			};

		case DELETE_PROJECT:
			return {
				...state,
				projects: state.projects.filter((project) => project.id != action.payload)
			};

		case EDIT_PROJECT:
			return {
				...state,
				projects: state.projects.map((project) => (project.id == action.payload.id ? action.payload : project))
			};

		case EDIT_FAILED:
		case DELETE_FAILED:
		case ADD_FAILED:
			return {
				...state,
				projectsMsg: action.payload
			};

		default:
			return state;
	}
};

export default reducer;
