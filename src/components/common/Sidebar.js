import React, { useState, useContext } from "react";
import styled from "@emotion/styled";
import { ProjectContext } from "../../contexts/project/ProjectContext";
import { useForm } from "./useForm";
import { TaskContext } from "../../contexts/task/TaskContext";
import Error from "./Error";

const Sidebar = () => {
  const { state, addProject, getProject, activeForm } = useContext(
    ProjectContext
  );
  const { formProject, projects } = state;
  //tasks
  const { getTasks } = useContext(TaskContext);

  const [project, setProject] = useState({
    id: "",
    name: ""
  });

  const validate = values => {
    let errors = {};
    if (values.name.trim() === "") {
      errors.name = "Name is required";
    }
    return errors;
  };

  const onHandlerSubmit = () => {
    addProject(values);
  };

  const onSelectProject = id => {
    getProject(id);
    getTasks(id);
  };

  const { onChange, onSubmit, errors, values } = useForm(
    onHandlerSubmit,
    project,
    validate
  );

  const { name } = values;
  return (
    <Aside>
      <h2>
        <strong>Mern</strong>Tasks
      </h2>
      <button onClick={activeForm}>
        {formProject ? "Closed" : " New Project"}
      </button>
      {formProject ? (
        <form onSubmit={onSubmit} className="new">
          <input
            name="name"
            value={name}
            onChange={e => onChange(e)}
            type="text"
          />
          <button>Add Project</button>
        </form>
      ) : null}
      {Object.keys(errors).length > 0 ? <Error message={errors.name} /> : null}
      <h3>Your Projects</h3>
      {!projects.length ? (
        <p>There are not project,start creating one.</p>
      ) : (
        projects.map(project => (
          <h5
            onClick={onSelectProject.bind(this, project._id)}
            key={project._id}
          >
            {project.name}
          </h5>
        ))
      )}
    </Aside>
  );
};

const Aside = styled.div`
  grid-area: aside;
  background: white;
  padding: 20px;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  @media (max-width: 768px) {
    width: 85%;
    margin: 0 auto;
  }
  @media (max-width: 576px) {
    width: 95%;
  }
  h2 {
    font-size: 26px;
    font-weight: 100;
    margin-bottom: 40px;
    strong {
      font-size: 26px;
      text-transform: uppercase;
      font-weight: bold;
    }
  }
  button {
    width: 100%;
    padding: 12px 0;
    font-size: 14px;
    border: none;
    border-radius: 5px;
    background: #293040;
    color: white;
  }
  .new {
    width: 100%;
    input {
      margin-top: 35px;
      margin-bottom: 15px;
      width: 99%;
      padding: 10px 0;
      padding-left: 5px;
      border: none;
      border-bottom: 1px solid #293040;
    }
  }

  h3 {
    font-size: 22px;
    font-weight: bolder;
    margin-top: 50px;
    margin-bottom: 30px;
  }
  p {
    font-size: 14px;
    font-weight: 600;
  }
  h5 {
    align-self: flex-start;
    font-size: 18px;
    font-weight: 500;
    font-weight: 600;
    cursor: pointer;
  }
`;

export default Sidebar;
