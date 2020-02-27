import React, { createContext, useReducer, useContext } from "react";
import { axios } from "../../services/axios";
import { projectReducer } from "./ProjectReducer";

import {
  GET_PROJECTS,
  ADD_PROJECT,
  GET_PROJECT,
  DELETE_PROJECT,
  FORM_PROJECT
} from "./ProjectAction";
import { AuthContext } from "../auth/AuthContext";

export const ProjectContext = createContext();

const ProjectContextProvider = ({ children }) => {
  //
  const { logout } = useContext(AuthContext);
  //
  const initialState = {
    projects: [],
    selectedProject: null,
    formProject: false
  };

  const [state, dispatch] = useReducer(projectReducer, initialState);

  const getProjects = async () => {
    try {
      const { data } = await axios.get("projects");
      dispatch(GET_PROJECTS(data));
    } catch (ex) {
      if (ex.response.status === 404) {
        logout();
      }
    }
  };

  const addProject = async project => {
    try {
      await axios.post("project", project);
      //sin el dispatch no se actualizan los productos
      dispatch(ADD_PROJECT(project));
      getProjects();
    } catch (ex) {
      if (ex.response.status === 404) {
        logout();
      }
    }
  };

  const getProject = id => {
    dispatch(GET_PROJECT(id));
  };

  const deleteProject = async id => {
    try {
      await axios.delete(`project/${id}`);
      dispatch(DELETE_PROJECT(id));
    } catch (ex) {
      if (ex.response.status === 404) {
        logout();
      }
    }
  };
  //ACTIVAR O DESACTIVAR CREAR UN PROYECTO
  const activeForm = () => {
    dispatch(FORM_PROJECT());
  };

  return (
    <ProjectContext.Provider
      value={{
        state,
        addProject,
        getProject,
        deleteProject,
        activeForm,
        getProjects
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectContextProvider;
