import { Issue } from '../../models/issue.model';
import {
  GET_ISSUES_FAILED,
  GET_ISSUES_REQUEST,
  GET_ISSUES_SUCCESS,
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
