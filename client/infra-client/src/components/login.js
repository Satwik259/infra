import { loginFailure, loginSuccess } from "./userSlice";

export const login = (username, password) => async (dispatch) => {
    try {
      const response = await fetch(
        `http://localhost:5000/users?username=${username}&password=${password}`
      );
      const data = await response.json();
      if (data.length === 1) {
        const loggedInUser = data[0];
        localStorage.setItem("user", JSON.stringify(loggedInUser));
        dispatch(loginSuccess(loggedInUser));
      } else {
        dispatch(loginFailure("Invalid credentials"));
      }
    } catch (error) {
      dispatch(loginFailure("Login failed"));
    }
  };
  