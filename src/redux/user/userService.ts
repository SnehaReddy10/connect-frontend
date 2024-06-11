import axios from 'axios';
import {
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
      const newUser = response.data;
      dispatch(registerUserSuccess(newUser.token));
    })
    .catch((err) => dispatch(registerUserFailed(err)));
};
