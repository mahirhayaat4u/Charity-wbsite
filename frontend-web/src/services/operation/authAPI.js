import { setLoading, setToken } from "../../slices/authSlice";

import { apiConnector } from "../apiConnector";
import { endpoints } from "../api";
import toast from "react-hot-toast";

const { LOGIN_API } = endpoints;
// SIGNUP_API, 
//signup
export function signUp(
  firstName,
  lastName,
  email,
  password,
  navigate
) {
  return async (dispatch) => {
    const toastId = toast.loading("loading...");
    dispatch(setLoading(true));
    try {
      console.log("before signup response")
      const response = await apiConnector("POST", '/api/v1/auth/signup', {
        firstName,
        lastName,
        email,
        password,
      });
      console.log("SIGNUP API RESPONSE............", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      toast.success("Signup Successful");
      navigate("/login");
    } catch (error) {
      console.log("SIGNUP API ERROR............", error);
      toast.error("Signup Failed");
       
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
}

//LOGIN

export function login(email, password, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));

    try {
      const response = await apiConnector("POST", '/api/v1/auth/login', {
        email,
        password,
      });
      console.log("LOGIN API RESPONSE............", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      toast.success("Login Successful");
      dispatch(setToken(response.data.token));

      localStorage.setItem("token", JSON.stringify(response.data.token));
      navigate("/profile");
    } catch (error) {
      console.log("LOGIN API ERROR............", error);
      toast.error("Login Failed");
    }

    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
}

//LOGOUT
export function logout(navigate) {
  return (dispatch) => {
    dispatch(setToken(null));
    localStorage.removeItem("token");
    toast.success("Logged Out");
    navigate("/");
  };
}
