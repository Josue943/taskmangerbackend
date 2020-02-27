import React, { useContext } from "react";
import { TaskContext } from "../../contexts/task/TaskContext";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const Task = ({ task }) => {
  const { name, state, _id } = task;
  const { addTask, onSelectTask, deleteTask } = useContext(TaskContext);

  const onDeleteTask = () => {
    deleteTask(_id);
  };

  const onEditTask = () => {
    task.state = !task.state;
    addTask(task);
  };

  return (
    <TaskDiv>
      <p className="title">{name}</p>
      <ul className="options">
        <li onClick={onEditTask} className={state ? "state" : "state active"}>
          {state ? "Complete" : "incomplete"}
        </li>
        <li
          onClick={() => {
            onSelectTask(task);
          }}
          className="edit"
        >
          Edit
        </li>
        <li onClick={onDeleteTask}>Delete</li>
      </ul>
    </TaskDiv>
  );
};

const TaskDiv = styled.div`
  width: 70%;
  @media (max-width: 992px) {
    width: 90%;
  }
  @media (max-width: 576px) {
    width: 95%;
  }
  margin: auto;
  background: "#ffffff";
  border: 1px solid #ccc;
  height: 50px;
  display: flex;
  flex-flow: wrap row;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  margin-top: 20px;
  -webkit-box-shadow: 0px 4px 10px -3px rgba(117, 117, 117, 1);
  -moz-box-shadow: 5px 4px 10px -3px rgba(117, 117, 117, 1);
  box-shadow: 0px 4px 10px -3px rgba(117, 117, 117, 1);
  .title {
    font-size: 20px;
    font-weight: bold;
    flex-basis: 35%;
  }
  .options {
    flex: 1;
    display: flex;
    flex-flow: wrap row;
    align-items: center;
    justify-content: flex-end;
    li {
      margin: 5px;
      cursor: pointer;
    }
  }
  .state {
    align-self: center;
    font-size: 12px;
    background: #afcb90;
  }
  .active {
    background: #fedbdd;
  }

  .edit {
    background: #29303f;
    padding: 8px 10px;
    color: white;
  }
`;

Task.propTypes = {
  task: PropTypes.object.isRequired
};

export default Task;
