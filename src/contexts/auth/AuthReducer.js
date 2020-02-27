export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
    case "REGISTER":
      localStorage.setItem("token", action.payload);
      return {
        ...state,
        token: action.payload,
        authenticated: true,
        errorMsg: null,
        loading: false
      };

    case "LOG_OUT":
      localStorage.clear();
      return {
        ...state,
        token: null,
        authenticated: false,
        errorMsg: null,
        user: null,
        loading: false
      };

    case "GET_USER":
      return {
        ...state,
        user: action.payload,
        authenticated: true,
        loading: false
      };

    case "ERROR":
      return {
        ...state,
        errorMsg: action.payload,
        loading: false
      };

    default:
      return state;
  }
};
