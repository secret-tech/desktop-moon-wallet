import { all, fork } from 'redux-saga/effects';
import { formActionSaga } from 'redux-form-saga';

export default function* () {
  yield all([
    fork(formActionSaga)
  ]);
}
