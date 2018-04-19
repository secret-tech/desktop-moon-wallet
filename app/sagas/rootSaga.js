import { all, fork } from 'redux-saga/effects';
import { formActionSaga } from 'redux-form-saga';

import themeSaga from './app/themeSaga';

import signInSaga from './auth/signInSaga';
import signUpSaga from './auth/signUpSaga';

export default function* () {
  yield all([
    fork(formActionSaga),
    fork(themeSaga),

    fork(signInSaga),
    fork(signUpSaga)
  ]);
}
