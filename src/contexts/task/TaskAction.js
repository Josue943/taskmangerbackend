export const ADD_TASK = task => {
  return { type: "ADD_TASK", payload: task };
};
export const GET_TASKS = tasks => {
  return { type: "GET_TASKS", payload: tasks };
};

export const SELECT_TASK = task => {
  return { type: "SELECT_TASK", payload: task };
};

export const DELETE_TASK = id => {
  return { type: "DELETE_TASK", payload: id };
};
