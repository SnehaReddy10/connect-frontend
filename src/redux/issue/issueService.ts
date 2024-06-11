import axios from 'axios';
import {
  getIssuesFailed,
  getIssuesRequest,
  getIssuesSuccess,
} from './issueActions';

export const getAllIssues = (dispatch: any) => {
  dispatch(getIssuesRequest());
  axios
    .get(`${import.meta.env.VITE_BACKEND_URL}/issue`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
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
