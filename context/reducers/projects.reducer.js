import { GET_PROJECTS, GET_PROJECT } from '../actions/types';

const reducer = (state, action) => {
    switch (action.type) {
        case GET_PROJECTS:
            return {
                ...state,
                projects: action.payload
            }

        default:
            return state;
    }
}

export default reducer;

