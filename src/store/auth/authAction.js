import Cookies from "universal-cookie";
import axios from "helpers/AxiosInstance";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT = "LOGOUT";
export const REGISTER = "REGISTER";
export const CHECK_TOKEN = "CHECK_TOKEN";
const cookie = new Cookies();

export const checkToken = () => {
  return async (dispatch) => {
    const token = await cookie.get("access_token");
    const nameAdmin = await cookie.get("name_admin");

    if (token) {
      dispatch({ type: LOGIN_SUCCESS, name: nameAdmin });
    } else {
      dispatch({ type: LOGOUT });
    }
  };
};

export function loginSuccess(access_token, expire_in, name) {
  return (dispatch) => {
    const cookies = new Cookies();
    cookies.set("access_token", access_token, { maxAge: expire_in });
    cookies.set("name_admin", name, { maxAge: expire_in });
    dispatch({ type: LOGIN_SUCCESS, name: name });
  };
}

export function logout() {
  return (dispatch) => {
    const cookies = new Cookies();
    cookies.remove("access_token");
    dispatch({ type: LOGOUT });
  };
}
