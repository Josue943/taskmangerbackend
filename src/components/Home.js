import React, { useContext, useEffect } from "react";
import Sidebar from "./common/Sidebar";
import Header from "./common/Header";
import { ProjectContext } from "../contexts/project/ProjectContext";
import TaskContainer from "./common/TaskContainer";
import TaskForm from "./common/TaskForm";

const Home = () => {
  const { state, getProjects } = useContext(ProjectContext);
  const { projects, selectedProject } = state;
  //auth
  //debe ir aqui o da un bug en la primera recarga
  useEffect(() => {
    getProjects();
    //eslint-disable-next-line
  }, []);
  return (
    <div className="home-container">
      <Header />
      <Sidebar />
      <div className="home-content">
        <TaskForm />
        {!selectedProject ? (
          <h2 className="title">
            {projects.length
              ? "Choose a project"
              : "Start Adding Some Projects"}
          </h2>
        ) : (
          <TaskContainer />
        )}
      </div>
    </div>
  );
};

export default Home;
