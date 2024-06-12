import {
  GET_ISSUES_FAILED,
  GET_ISSUES_REQUEST,
  GET_ISSUES_SUCCESS,
  GET_ISSUE_BY_ID_FAILED,
  GET_ISSUE_BY_ID_REQUEST,
  GET_ISSUE_BY_ID_SUCCESS,
} from './issueTypes';

const initialState = {
  laoding: false,
  issues: null,
  issue: null,
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
    case GET_ISSUE_BY_ID_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_ISSUE_BY_ID_SUCCESS:
      return {
        loading: false,
        issue: action.payload,
        error: '',
      };
    case GET_ISSUE_BY_ID_FAILED:
      return {
        loading: false,
        issue: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
