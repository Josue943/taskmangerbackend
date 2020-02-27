import React, { createContext, useReducer } from "react";
import { taskReducer } from "./TaskReducer";
import { ADD_TASK, GET_TASKS, SELECT_TASK, DELETE_TASK } from "./TaskAction";
import { axios } from "../../services/axios";

export const TaskContext = createContext();

const TaskContextProvider = ({ children }) => {
  const initialState = {
    projectTasks: [],
    selectedTask: null
  };

  const [state, dispatch] = useReducer(taskReducer, initialState);

  const getTasks = async id => {
    try {
      const { data } = await axios.get(`tasks/${id}`);
      dispatch(GET_TASKS(data));
    } catch (error) {
      console.log(error.response.data);
    }
  };

  //editar o crear tarea
  const addTask = async task => {
    if (task._id) {
      try {
        await axios.put("task/" + task._id, task);
        dispatch(ADD_TASK(task));
      } catch (error) {
        console.log(error.response.data);
      }
    } else {
      try {
        await axios.post("task", task);
        dispatch(ADD_TASK(task));
      } catch (error) {
        console.log(error.response.data);
      }
    }
  };

  const onSelectTask = task => {
    dispatch(SELECT_TASK(task));
  };

  const deleteTask = async id => {
    try {
      await axios.delete(`task/${id}`);
      dispatch(DELETE_TASK(id));
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        taskState: state,
        getTasks,
        addTask,
        onSelectTask,
        deleteTask
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
