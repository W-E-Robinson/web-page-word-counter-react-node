import {
    FETCH_WORD_COUNT_REQUEST,
    FETCH_WORD_COUNT_SUCCESS,
    FETCH_WORD_COUNT_FAILURE,
} from "./actionTypes";

export interface Word {
    word: string;
    count: number;
}

export interface WebPageInfo {
    webPageUrl: string;
    totalWordCount: number;
    destructuredWordCount: Word[];
}

export interface WordCountState {
    pending: boolean;
    error: undefined | string | null;
    wordCountsInfo: WebPageInfo[];
}

export interface FetchWordCountRequestPayload {
    webPageUrl: string;
}

export interface FetchWordCountSuccessPayload {
    webPageInfo: WebPageInfo;
}

export interface FetchWordCountFailurePayload {
    error: string | null;
}

export type FetchWordCountRequest = {
    type: typeof FETCH_WORD_COUNT_REQUEST;
    payload: FetchWordCountRequestPayload,
}

export type FetchWordCountSuccess = {
    type: typeof FETCH_WORD_COUNT_SUCCESS;
    payload: FetchWordCountSuccessPayload;
};

export type FetchWordCountFailure = {
    type: typeof FETCH_WORD_COUNT_FAILURE;
    payload: FetchWordCountFailurePayload;
};

export type WordCountActions =
    | FetchWordCountRequest
    | FetchWordCountSuccess
    | FetchWordCountFailure;
