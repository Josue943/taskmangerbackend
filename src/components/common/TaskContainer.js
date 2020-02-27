import React, { useContext } from "react";
import styled from "@emotion/styled";
import { ProjectContext } from "../../contexts/project/ProjectContext";
import { TaskContext } from "../../contexts/task/TaskContext";
import Task from "./Task";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const TaskContainer = () => {
  const { state, deleteProject } = useContext(ProjectContext);
  const { selectedProject } = state;
  //tasks state
  const { taskState } = useContext(TaskContext);
  const { projectTasks } = taskState;
  return (
    <Tasks>
      <h2>Project: {selectedProject.name}</h2>
      {projectTasks.length === 0 ? (
        <h2>add some tasks</h2>
      ) : (
        <TransitionGroup>
          {projectTasks.map(task => (
            <CSSTransition key={task._id} timeout={500} classNames="taska">
              <Task task={task} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      )}
      <ButtonDelete onClick={() => deleteProject(selectedProject._id)}>
        Delete Project &times;
      </ButtonDelete>
    </Tasks>
  );
};
const Tasks = styled.div`
  width: 60%;
  margin: auto;
  @media (max-width: 992px) {
    width: 95%;
  }
  h2 {
    margin-top: 30px;
  }
`;

const ButtonDelete = styled.div`
  border: none;
  margin-top: 30px;
  cursor: pointer;
`;

export default TaskContainer;
