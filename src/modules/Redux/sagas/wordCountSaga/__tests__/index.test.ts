import { call, put, take } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';

import { FETCH_WORD_COUNT_REQUEST } from '../../../actions/wordCount/actionTypes';
import { fetchWordCountSaga } from '../index';
import {
    fetchWordCountSuccess,
    fetchWordCountFailure,
} from '../../../actions/wordCount/actions';
import { getWordCount } from '../../../apis/wordCount';
import { FetchWordCountRequest, WebPageInfo } from '../../../actions/wordCount/types';
import { Api } from './types';

describe('fetchWordCountSaga testing', () => {
    const mockWebPageInfo = {
        webPageUrl: 'mock url',
        totalWordCount: 10,
        destructuredWordCount: [
            { word: 'the', count: 100 },
            { word: 'and', count: 90 },
            { word: 'umbrella', count: 2 },
        ],
    };

    function* mockSaga(api: Api) {
        const action: FetchWordCountRequest = yield take(FETCH_WORD_COUNT_REQUEST);
        // @ts-ignore
        const response: WebPageInfo = yield call(api.getWordCount, action.payload);

        yield put({
            type: FETCH_WORD_COUNT_REQUEST,
            payload: response,
        });
    }

    const mockAction = {
        type: FETCH_WORD_COUNT_REQUEST,
        payload: {
            searchedUrls: ['mock searched url'],
            webPageUrl: 'mock url',
        },
    };

    test('mockSaga', () => {
        const api = {
            getWordCount: (resource: string) => ({ resource }),
        };

        // @ts-ignore
        return expectSaga(mockSaga, api)
            .put({
                type: FETCH_WORD_COUNT_REQUEST,
                payload: { resource: 'mockResource' },
            })
            .dispatch({
                type: FETCH_WORD_COUNT_REQUEST,
                payload: 'mockResource',
            })
            .run();
    });

    test('successful response', () => {
        const response = mockWebPageInfo;

        const generator = fetchWordCountSaga(mockAction as FetchWordCountRequest);

        expect(generator.next().value).toEqual(call(
            getWordCount,
            mockAction.payload.webPageUrl,
        ));
        expect(generator.next(response).value).toEqual(put(
            fetchWordCountSuccess({
                webPageInfo: mockWebPageInfo,
            }),
        ));
    });

    test('error response', () => {
        const response = {
            message: 'mock error',
        };

        const generator = fetchWordCountSaga(mockAction as FetchWordCountRequest);

        expect(generator.next().value).toEqual(call(
            getWordCount,
            mockAction.payload.webPageUrl,
        ));
        expect(generator.throw(response).value).toEqual(put(
            fetchWordCountFailure({
                error: response.message,
            }),
        ));
    });
});
