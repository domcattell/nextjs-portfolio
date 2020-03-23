import React, {createContext, useReducer} from 'react';
import {GET_PROJECTS} from '../actions/types';
import projectsReducer from '../reducers/projects.reducer';
import axios from 'axios';

export const ProjectsContext = createContext();
export const ProjectsActions = createContext();

export const ProjectsProvider = (props) => {

    const initState = {
        projects: {}
    };

    const [state, dispatch] = useReducer(projectsReducer, initState);

    const getProjects = async () => {
        try {
            const res = await axios.get("/api/projects", {
                headers: {Accept: "application/json"}
            });
            dispatch({
                type: GET_PROJECTS,
                payload: res.data
            });
        } catch (err) {
            console.log(err)
        }
    }

    const actions = {
        getProjects
    }

    return (
        <ProjectsContext.Provider value={state}>
            <ProjectsActions.Provider value={actions}>
                {props.children}
            </ProjectsActions.Provider>
        </ProjectsContext.Provider>
    )
}

