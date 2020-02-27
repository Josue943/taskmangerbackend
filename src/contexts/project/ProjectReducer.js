export const projectReducer = (state, action) => {
  switch (action.type) {
    case "GET_PROJECTS":
      return { ...state, projects: action.payload };

    case "ADD_PROJECT":
      return { ...state };

    case "GET_PROJECT":
      return {
        ...state,
        selectedProject: state.projects.find(
          project => project._id === action.payload
        )
      };

    case "DELETE_PROJECT":
      return {
        ...state,
        projects: state.projects.filter(
          project => project._id !== action.payload
        ),
        selectedProject: null
      };

    case "FORM_PROJECT":
      return {
        ...state,
        formProject: !state.formProject
      };

    default:
      break;
  }
};
