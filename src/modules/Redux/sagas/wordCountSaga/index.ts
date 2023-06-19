import { put, call, takeEvery, all } from "redux-saga/effects";

import { FetchWordCountRequest, WebPageInfo } from "../../actions/wordCount/types";
import {
    fetchWordCountSuccess,
    fetchWordCountFailure,
} from "../../actions/wordCount/actions";
import { FETCH_WORD_COUNT_REQUEST } from "../../actions/wordCount/actionTypes";
import { getWordCount } from "../../apis/wordCount";
import { hasUrlBeenSearched } from "./functions/index";

export function* fetchWordCountSaga(action: FetchWordCountRequest) {
    try {
        if (hasUrlBeenSearched(action.payload.searchedUrls, action.payload.webPageUrl)) { throw new Error("That URL has already been searched"); }

        const response: WebPageInfo = yield call(
            getWordCount,
            action.payload.webPageUrl,
        );

        if (typeof response === "string") { throw new Error(response); }

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

export default function* wordCountSaga() {
    yield all([
        takeEvery(FETCH_WORD_COUNT_REQUEST, fetchWordCountSaga),
    ]);
}
