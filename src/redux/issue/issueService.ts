import axios from 'axios';
import {
  getIssueByIdFailed,
  getIssueByIdRequest,
  getIssueByIdSuccess,
  getIssuesFailed,
  getIssuesRequest,
  getIssuesSuccess,
} from './issueActions';
import { TOKEN } from '../../constants/Constants';

export const getAllIssues = (dispatch: any) => {
  dispatch(getIssuesRequest());
  axios
    .get(`${import.meta.env.VITE_BACKEND_URL}/issue`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem(TOKEN)}`,
      },
    })
    .then((response: any) => {
      const issues = response.data.issues;
      dispatch(getIssuesSuccess(issues));
    })
    .catch((err: any) => {
      console.log('Get All Issues Failed', err.response.data.error);
      dispatch(getIssuesFailed(err));
    });
};

export const getIssuesById = (dispatch: any, issueId: string) => {
  dispatch(getIssueByIdRequest());
  axios
    .get(`${import.meta.env.VITE_BACKEND_URL}/issue/${issueId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem(TOKEN)}`,
      },
    })
    .then((response: any) => {
      const issue = response.data.issue;
      dispatch(getIssueByIdSuccess(issue));
    })
    .catch((err: any) => {
      console.log('Get All Issues Failed', err.response.data.error);
      dispatch(getIssueByIdFailed(err));
    });
};
