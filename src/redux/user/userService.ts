import axios from 'axios';
import {
  loginUserFailed,
  loginUserRequest,
  loginUserSuccess,
  registerUserFailed,
  registerUserRequest,
  registerUserSuccess,
} from './userActions';
import { User } from '../../models/user.model';

export const registerUser = (user: User, dispatch: any) => {
  dispatch(registerUserRequest());
  axios
    .post(`${import.meta.env.VITE_BACKEND_URL}/auth/register`, user)
    .then((response) => {
      const token = response.data.token;
      dispatch(registerUserSuccess(token));
    })
    .catch((err) => dispatch(registerUserFailed(err)));
};

export const loginUser = (
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
    .catch((err) => dispatch(loginUserFailed(err)));
};
