import { combineReducers } from 'redux';

import { IAppState } from './types';
import auth from './auth/store';

const rootReducer = combineReducers<IAppState>({
  auth,
});

export default rootReducer;
