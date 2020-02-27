import React, { useState, useContext, useEffect } from "react";
import styled from "@emotion/styled";
import { ProjectContext } from "../../contexts/project/ProjectContext";
import { TaskContext } from "../../contexts/task/TaskContext";
import Error from "./Error";

const TaskForm = () => {
  //
  const { state: context } = useContext(ProjectContext);
  const { selectedProject } = context;
  //task
  const { taskState, addTask } = useContext(TaskContext);
  const { selectedTask } = taskState;
  const [task, setTask] = useState({ name: "" });
  const [error, setError] = useState(false);
  const { name } = task;

  const onCreateTask = e => {
    e.preventDefault();
    if (name.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    if (!task.projectId) {
      task.projectId = selectedProject._id;
    }
    addTask(task);
    setTask({ name: "" });
  };

  useEffect(() => {
    if (selectedTask) {
      setTask(selectedTask);
    }
  }, [selectedTask]);

  if (!selectedProject) return null;

  return (
    <FormTask>
      <form onSubmit={onCreateTask} className="container">
        {error ? <Error message="Name is required" /> : null}
        <input
          value={name}
          onChange={e => setTask({ ...task, name: e.target.value })}
        />
        <button>{selectedTask ? "Edit Task" : "Add Task"}</button>
      </form>
    </FormTask>
  );
};

const FormTask = styled.div`
  background: #191d2b;
  padding: 40px 0;
  .container {
    width: 50%;
    margin: auto;
    display: flex;
    flex-flow: column wrap;
    @media (max-width: 992px) {
      width: 85%;
    }
    @media (max-width: 576px) {
      width: 95%;
    }
  }
  input {
    height: 35px;
    border-radius: 5px;
    border: none;
    margin-bottom: 20px;
    padding-left: 5px;
  }
  button {
    padding: 13px 0;
    border: none;
    border-radius: 5px;
    background: #293040;
    color: white;
    font-size: 14px;
  }
`;

export default TaskForm;
