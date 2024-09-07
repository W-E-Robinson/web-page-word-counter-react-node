import {
    put, call, takeEvery, all,
} from 'redux-saga/effects';

import { FetchWordCountRequest, WebPageInfo } from '../../actions/wordCount/types';
import {
    fetchWordCountSuccess,
    fetchWordCountFailure,
} from '../../actions/wordCount/actions';
import { FETCH_WORD_COUNT_REQUEST } from '../../actions/wordCount/actionTypes';
import getWordCount from '../../apis/wordCount';

export function* fetchWordCountSaga(action: FetchWordCountRequest) {
    try {
        if (action.payload.searchedUrls.includes(action.payload.webPageUrl)) {
            throw new Error('That URL has already been searched'); // NOTE: how is all error handling... handled?
        }

        const response: WebPageInfo = yield call(
            getWordCount,
            action.payload.webPageUrl,
        );

        if (typeof response === 'string') { // NOTE: eh?
            throw new Error(response); // NOTE: to be fair why return from api to rethrow here?
        }

        yield put(
            fetchWordCountSuccess({
                webPageInfo: response,
            }),
        );
    } catch (error: any) {
        yield put(
            fetchWordCountFailure({
                error: error.message,
            }),
        );
    }
}

function* wordCountSaga() {
    yield all([
        takeEvery(FETCH_WORD_COUNT_REQUEST, fetchWordCountSaga),
    ]);
}

export default wordCountSaga;
