import {
    FETCH_WORD_COUNT_REQUEST,
    FETCH_WORD_COUNT_SUCCESS,
    FETCH_WORD_COUNT_FAILURE,
    SET_WORD_COUNT_PROPERTY,
} from '../../../actions/wordCount/actionTypes';
import {
    FetchWordCountFailure, FetchWordCountRequest, FetchWordCountSuccess, SetWordCountProperty,
} from '../../../actions/wordCount/types';

import {
    initialState,
    wordCountReducer,
} from '../index';

describe('wordCountReducer testing', () => {
    test('FETCH_WORD_COUNT_REQUEST', () => {
        const mockAction: FetchWordCountRequest = {
            type: FETCH_WORD_COUNT_REQUEST,
            payload: {
                searchedUrls: ['mock searched url'],
                webPageUrl: 'mock url',
            },
        };
        const updatedState = wordCountReducer(initialState, mockAction);

        expect(updatedState.pending).toBe(true);
        expect(updatedState.error).toBe(undefined);
        expect(updatedState.wordCountsInfo).toEqual([]);
    });

    test('FETCH_WORD_COUNT_SUCCESS', () => {
        const mockAction: FetchWordCountSuccess = {
            type: FETCH_WORD_COUNT_SUCCESS,
            payload: {
                webPageInfo: {
                    webPageUrl: 'mock url',
                    totalWordCount: 10,
                    destructuredWordCount: [
                        { word: 'the', count: 100 },
                        { word: 'and', count: 90 },
                        { word: 'umbrella', count: 2 },
                    ],
                },
            },
        };
        const updatedState = wordCountReducer(initialState, mockAction);

        expect(updatedState.pending).toBe(false);
        expect(updatedState.error).toBe(null);
        expect(updatedState.wordCountsInfo).toEqual([mockAction.payload.webPageInfo]);
    });

    test('FETCH_WORD_COUNT_FAILURE', () => {
        const mockAction: FetchWordCountFailure = {
            type: FETCH_WORD_COUNT_FAILURE,
            payload: {
                error: 'mock error message',
            },
        };
        const updatedState = wordCountReducer(initialState, mockAction);

        expect(updatedState.pending).toBe(false);
        expect(updatedState.error).toEqual(mockAction.payload.error);
        expect(updatedState.wordCountsInfo).toEqual([]);
    });

    test('SET_WORD_COUNT_PROPERTY', () => {
        const mockAction: SetWordCountProperty = {
            type: SET_WORD_COUNT_PROPERTY,
            payload: {
                error: 'mock error',
            },
        };
        const updatedState = wordCountReducer(initialState, mockAction);

        expect(updatedState.error).toEqual('mock error');
    });
});
