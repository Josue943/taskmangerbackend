export const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      //add OR Update
      let projectTasks;
      if (action.payload._id) {
        projectTasks = state.projectTasks.map(task =>
          task._id === action.payload._id ? action.payload : task
        );
      } else {
        projectTasks = [action.payload, ...state.projectTasks];
      }
      return {
        ...state,
        projectTasks: projectTasks,
        selectedTask: null
      };

    case "GET_TASKS":
      return {
        ...state,
        projectTasks: action.payload
      };

    case "SELECT_TASK":
      return {
        ...state,
        selectedTask: action.payload
      };

    case "DELETE_TASK":
      return {
        ...state,
        projectTasks: state.projectTasks.filter(
          task => task._id !== action.payload
        )
      };

    default:
      break;
  }
};
