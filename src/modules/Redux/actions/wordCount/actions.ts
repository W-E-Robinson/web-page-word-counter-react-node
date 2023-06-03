import {
    FetchWordCountRequest,
    FetchWordCountRequestPayload,
    FetchWordCountSuccess,
    FetchWordCountSuccessPayload,
    FetchWordCountFailure,
    FetchWordCountFailurePayload,
    SetWordCountProperty,
    SetWordCountPropertyPayload,
} from "./types";
import {
    FETCH_WORD_COUNT_REQUEST,
    FETCH_WORD_COUNT_SUCCESS,
    FETCH_WORD_COUNT_FAILURE,
    SET_WORD_COUNT_PROPERTY,
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

export const setWordCountProperty = (
    payload: SetWordCountPropertyPayload,
): SetWordCountProperty => ({
    type: SET_WORD_COUNT_PROPERTY,
    payload,
});
