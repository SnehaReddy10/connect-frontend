import axios from 'axios';
import {
  getUserFailed,
  getUserRequest,
  getUserSuccess,
  loginUserFailed,
  loginUserRequest,
  loginUserSuccess,
  logoutUserSuccess,
  registerUserFailed,
  registerUserRequest,
  registerUserSuccess,
} from './userActions';
import { User } from '../../models/user.model';
import { TOKEN } from '../../constants/Constants';

export const registerUser = (user: User, dispatch: any) => {
  dispatch(registerUserRequest());
  axios
    .post(`${import.meta.env.VITE_BACKEND_URL}/auth/register`, user)
    .then((response) => {
      const token = response.data.token;
      dispatch(registerUserSuccess(token));
    })
    .catch((err) => dispatch(registerUserFailed(err.response.data.error)));
};

export const loginUser = async (
  user: { email: string; password: string },
  dispatch: any
) => {
  dispatch(loginUserRequest());
  axios
    .post(`${import.meta.env.VITE_BACKEND_URL}/auth/login`, user)
    .then((response) => {
      const token = response.data.token;
      dispatch(loginUserSuccess(token));
    })
    .catch((err: any) => {
      dispatch(loginUserFailed(err.response.data.error));
    });
};

export const logoutUser = async (dispatch: any) => {
  dispatch(logoutUserSuccess());
};

export const getUser = async (dispatch: any) => {
  dispatch(getUserRequest());
  axios
    .get(`${import.meta.env.VITE_BACKEND_URL}/user`, {
      headers: { Authorization: `Bearer ${localStorage.getItem(TOKEN)}` },
    })
    .then((response) => {
      const user = response.data.user;
      dispatch(getUserSuccess(user));
    })
    .catch((err: any) => {
      dispatch(getUserFailed(err.response.data.error));
    });
};
