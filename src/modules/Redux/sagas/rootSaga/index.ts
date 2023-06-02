import { all, fork } from "redux-saga/effects";

import wordCountSaga from "../wordCountSaga";

export function* rootSaga() {
    yield all([fork(wordCountSaga)]);
}
