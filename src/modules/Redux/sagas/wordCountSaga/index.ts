import {
    put, call, takeEvery, all,
} from 'redux-saga/effects';

import {
    type FetchWordCountRequest,
    type WebPageInfo,
    fetchWordCountSuccess,
    fetchWordCountFailure,
    FETCH_WORD_COUNT_REQUEST,
} from '../../actions/wordCount/actions';
import getWordCount, { APIError } from '../../apis/wordCount';

export function* fetchWordCountSaga(action: FetchWordCountRequest) {
    try {
        if (action.payload.searchedUrls.includes(action.payload.url)) {
            throw new Error('That URL has already been searched');
        }

        const response: WebPageInfo = yield call(
            getWordCount,
            action.payload.url,
        );

        yield put(
            fetchWordCountSuccess({
                webPageInfo: response,
            }),
        );
    } catch (error) {
        if (error instanceof APIError) {
            yield put(
                fetchWordCountFailure({
                    error: `${error.status}: ${error.message}`,
                }),
            );
        } else {
            yield put(
                fetchWordCountFailure({
                    error: (error as Error).message,
                }),
            );
        }
    }
}

function* wordCountSaga() {
    yield all([
        takeEvery(FETCH_WORD_COUNT_REQUEST, fetchWordCountSaga),
    ]);
}

export default wordCountSaga;
