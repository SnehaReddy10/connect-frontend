import { combineReducers } from 'redux';
import { userReducer } from './user/userReducer';
import { issueReducer } from './issue/issueReducer';

export const reducer = combineReducers({
  user: userReducer,
  issue: issueReducer,
});
