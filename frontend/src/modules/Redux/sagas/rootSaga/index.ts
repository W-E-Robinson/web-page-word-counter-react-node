import { all, fork } from 'redux-saga/effects';

import wordCountSaga from '../wordCountSaga';

function* rootSaga() {
    yield all([fork(wordCountSaga)]);
}

export default rootSaga;
