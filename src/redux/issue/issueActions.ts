import { Issue } from '../../models/issue.model';
import {
  GET_ISSUES_FAILED,
  GET_ISSUES_REQUEST,
  GET_ISSUES_SUCCESS,
  GET_ISSUE_BY_ID_FAILED,
  GET_ISSUE_BY_ID_REQUEST,
  GET_ISSUE_BY_ID_SUCCESS,
} from './issueTypes';

export const getIssuesRequest = () => {
  return {
    type: GET_ISSUES_REQUEST,
  };
};

export const getIssuesSuccess = (issues: Issue[]) => {
  return {
    type: GET_ISSUES_SUCCESS,
    payload: issues,
  };
};

export const getIssuesFailed = (error: string) => {
  return {
    type: GET_ISSUES_FAILED,
    payload: error,
  };
};

export const getIssueByIdRequest = () => {
  return {
    type: GET_ISSUE_BY_ID_REQUEST,
  };
};

export const getIssueByIdSuccess = (issues: Issue[]) => {
  return {
    type: GET_ISSUE_BY_ID_SUCCESS,
    payload: issues,
  };
};

export const getIssueByIdFailed = (error: string) => {
  return {
    type: GET_ISSUE_BY_ID_FAILED,
    payload: error,
  };
};
