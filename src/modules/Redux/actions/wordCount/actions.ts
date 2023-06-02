import {
    FetchWordCountRequest,
    FetchWordCountRequestPayload,
    FetchWordCountSuccess,
    FetchWordCountSuccessPayload,
    FetchWordCountFailure,
    FetchWordCountFailurePayload,
} from "./types";
import {
    FETCH_WORD_COUNT_REQUEST,
    FETCH_WORD_COUNT_SUCCESS,
    FETCH_WORD_COUNT_FAILURE,
} from "./actionTypes";

export const fetchWordCountRequest = (
    payload: FetchWordCountRequestPayload,
): FetchWordCountRequest => ({
    type: FETCH_WORD_COUNT_REQUEST,
    payload,
});

export const fetchWordCountSuccess = (
    payload: FetchWordCountSuccessPayload,
): FetchWordCountSuccess => ({
    type: FETCH_WORD_COUNT_SUCCESS,
    payload,
});

export const fetchWordCountFailure = (
    payload: FetchWordCountFailurePayload,
): FetchWordCountFailure => ({
    type: FETCH_WORD_COUNT_FAILURE,
    payload,
});
