import { TOKEN } from '../../constants/Constants';
import {
  GET_USER_FAILED,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
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
  error: null,
  currentUser: null,
};

export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case REGISTER_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_USER_SUCCESS:
      localStorage.setItem(TOKEN, action.payload);
      return {
        loading: false,
        token: action.payload,
        error: null,
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
      return {
        loading: false,
        token: action.payload,
        error: null,
      };
    case LOGIN_USER_FAILED:
      return {
        loading: false,
        token: null,
        error: action.payload,
      };
    case GET_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_USER_SUCCESS:
      return {
        loading: false,
        currentUser: action.payload,
        error: null,
      };
    case GET_USER_FAILED:
      return {
        loading: false,
        currentUser: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
