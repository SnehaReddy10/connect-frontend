import {
  LOGIN_USER_FAILED,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  REGISTER_USER_FAILED,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
} from './userTypes';

const initialState = {
  loading: false,
  token: null,
  error: '',
};

export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case REGISTER_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_USER_SUCCESS:
      localStorage.setItem('token', action.payload);
      return {
        loading: false,
        token: action.payload,
        error: '',
      };
    case REGISTER_USER_FAILED:
      return {
        loading: false,
        token: null,
        error: action.payload,
      };
    case LOGIN_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_USER_SUCCESS:
      localStorage.setItem('token', action.payload);
      return {
        loading: false,
        token: action.payload,
        error: '',
      };
    case LOGIN_USER_FAILED:
      return {
        loading: false,
        token: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
