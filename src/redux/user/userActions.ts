import { IUser } from '../../../../backend/src/interfaces/user.interface';
import {
  REGISTER_USER_FAILED,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
} from './userTypes';

export const registerUserRequest = () => {
  return {
    type: REGISTER_USER_REQUEST,
  };
};

export const registerUserSuccess = (user: IUser) => {
  return {
    type: REGISTER_USER_SUCCESS,
    payload: user,
  };
};

export const registerUserFailed = (error: any) => {
  return {
    type: REGISTER_USER_FAILED,
    payload: error,
  };
};
