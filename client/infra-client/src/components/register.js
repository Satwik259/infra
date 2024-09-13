import { registerFailure, registerSuccess } from "./registerslice";

export const registerUser = (username, password, role) => async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:5000/users?username=${username}`);
      const data = await response.json();
      if (data.length > 0) {
        dispatch(registerFailure("Username already exists"));
      } else {
        await fetch('http://localhost:5000/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password, role }),
        });
        dispatch(registerSuccess());
      }
    } catch (error) {
      dispatch(registerFailure("Registration failed"));
    }
  };
  