import { LOGIN_SUCCESS, REGISTER, CHECK_TOKEN, LOGOUT } from "./authAction";

export const initialState = {
  email: "",
  name: "",
  isLoggedIn: false,
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
      };
    case REGISTER:
      return {
        ...state,
        token: action.token,
        userId: action.userId,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
      };
    case CHECK_TOKEN: {
      return {
        ...state,
        isLoggedIn: action.isLoggedIn,
      };
    }
    default:
      return state;
  }
}

export default authReducer;
