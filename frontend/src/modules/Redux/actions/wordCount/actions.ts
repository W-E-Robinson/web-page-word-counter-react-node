export interface Word {
    word: string;
    count: number;
}
export interface WebPageInfo {
    url: string;
    wordCount: number;
    wordsList: Word[];
}
export interface WordCountState {
    pending: boolean;
    error: string | null;
    wordCountsInfo: WebPageInfo[];
}

export const FETCH_WORD_COUNT_REQUEST = 'FETCH_WORD_COUNT_REQUEST';
export interface FetchWordCountRequestPayload {
    searchedUrls: string[];
    url: string;
}
export type FetchWordCountRequest = {
    type: typeof FETCH_WORD_COUNT_REQUEST;
    payload: FetchWordCountRequestPayload,
};
export const fetchWordCountRequest = (
    payload: FetchWordCountRequestPayload,
): FetchWordCountRequest => ({
    type: FETCH_WORD_COUNT_REQUEST,
    payload,
});

export const FETCH_WORD_COUNT_SUCCESS = 'FETCH_WORD_COUNT_SUCCESS';
export interface FetchWordCountSuccessPayload {
    webPageInfo: WebPageInfo;
}
export type FetchWordCountSuccess = {
    type: typeof FETCH_WORD_COUNT_SUCCESS;
    payload: FetchWordCountSuccessPayload;
};
export const fetchWordCountSuccess = (
    payload: FetchWordCountSuccessPayload,
): FetchWordCountSuccess => ({
    type: FETCH_WORD_COUNT_SUCCESS,
    payload,
});

export const FETCH_WORD_COUNT_FAILURE = 'FETCH_WORD_COUNT_FAILURE';
export interface FetchWordCountFailurePayload {
    error: string | null;
}
export type FetchWordCountFailure = {
    type: typeof FETCH_WORD_COUNT_FAILURE;
    payload: FetchWordCountFailurePayload;
};
export const fetchWordCountFailure = (
    payload: FetchWordCountFailurePayload,
): FetchWordCountFailure => ({
    type: FETCH_WORD_COUNT_FAILURE,
    payload,
});

export const SET_WORD_COUNT_PROPERTY = 'SET_WORD_COUNT_PROPERTY';
export interface SetWordCountStatePropertyPayload {
    [key: string]: any;
}
export type SetWordCountProperty = {
    type: typeof SET_WORD_COUNT_PROPERTY;
    payload: SetWordCountStatePropertyPayload;
};

export const setWordCountStateProperty = (
    payload: SetWordCountStatePropertyPayload,
): SetWordCountProperty => ({
    type: SET_WORD_COUNT_PROPERTY,
    payload,
});

export type WordCountActions =
    | FetchWordCountRequest
    | FetchWordCountSuccess
    | FetchWordCountFailure
    | SetWordCountProperty;
