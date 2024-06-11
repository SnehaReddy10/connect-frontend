import {
  GET_ISSUES_FAILED,
  GET_ISSUES_REQUEST,
  GET_ISSUES_SUCCESS,
} from './issueTypes';

const initialState = {
  laoding: false,
  issues: null,
  error: '',
};

export const issueReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_ISSUES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_ISSUES_SUCCESS:
      return {
        loading: false,
        issues: action.payload,
        error: '',
      };
    case GET_ISSUES_FAILED:
      return {
        loading: false,
        issues: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
