import { put, call, takeEvery, all } from "redux-saga/effects";

import { FetchWordCountRequest, WebPageInfo } from "../../actions/wordCount/types";
import {
    fetchWordCountSuccess,
    fetchWordCountFailure,
} from "../../actions/wordCount/actions";
import { FETCH_WORD_COUNT_REQUEST } from "../../actions/wordCount/actionTypes";
import { getWordCount } from "../../apis/wordCount";
import { configureStore } from "../../store/index";
import { hasUrlBeenSearched } from "./functions/index";

export function* fetchWordCountSaga(action: FetchWordCountRequest) {
    try {
        const searchedUrls = configureStore().getState().wordCounts.wordCountsInfo.map(wordCountInfo => wordCountInfo.webPageUrl);
        if (hasUrlBeenSearched(searchedUrls, action.payload.webPageUrl)) { throw new Error("This URL has already been searched"); }

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
