export const GET_PROJECTS = projects => {
  return { type: "GET_PROJECTS", payload: projects };
};

export const ADD_PROJECT = project => {
  return { type: "ADD_PROJECT", project };
};

export const GET_PROJECT = _id => {
  return { type: "GET_PROJECT", payload: _id };
};

export const FORM_PROJECT = () => {
  return { type: "FORM_PROJECT" };
};

export const DELETE_PROJECT = id => {
  return { type: "DELETE_PROJECT", payload: id };
};
