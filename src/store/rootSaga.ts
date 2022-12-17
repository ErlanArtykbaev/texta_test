import { all, fork } from 'redux-saga/effects';

import auth from './auth/effects';

function* Saga(): Generator {
  yield all([
    fork(auth),
  ]);
}

export default Saga;
