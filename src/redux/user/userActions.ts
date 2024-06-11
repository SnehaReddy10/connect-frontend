import { IUser } from '../../../../backend/src/interfaces/user.interface';
import {
  LOGIN_USER_FAILED,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
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

export const loginUserRequest = () => {
  return {
    type: LOGIN_USER_REQUEST,
  };
};

export const loginUserSuccess = (token: string) => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: token,
  };
};

export const loginUserFailed = (error: any) => {
  return {
    type: LOGIN_USER_FAILED,
    payload: error,
  };
};
