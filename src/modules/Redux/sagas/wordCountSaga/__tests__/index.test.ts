import { call, put } from 'redux-saga/effects';

import { fetchWordCountSaga } from '../index';
import {
    FETCH_WORD_COUNT_REQUEST,
    fetchWordCountSuccess,
    fetchWordCountFailure,
    type FetchWordCountRequest,
    type WebPageInfo,
} from '../../../actions/wordCount/actions';
import getWordCount, { APIError } from '../../../apis/wordCount';

jest.mock('../../../apis/wordCount', () => {
    const actualModule = jest.requireActual('../../../apis/wordCount');

    return {
        __esModule: true,
        default: jest.fn(),
        ...actualModule,
    };
});

describe('fetchWordCountSaga testing', () => {
    afterAll(() => {
        jest.restoreAllMocks();
    });

    it('should generate an error when the url has already been searched', () => {
        const mockAction: FetchWordCountRequest = {
            type: FETCH_WORD_COUNT_REQUEST,
            payload: {
                searchedUrls: ['mock url'],
                url: 'mock url',
            },
        };

        const generator = fetchWordCountSaga(mockAction);

        expect(generator.next().value).toEqual(put(
            fetchWordCountFailure({
                error: 'That URL has already been searched',
            }),
        ));
    });

    it('should generate an error when there is an axios error', () => {
        // @ts-ignore - ignoring full typing for a simple mock
        getWordCount.mockResolvedValueOnce(new APIError('test message', 500));

        const mockAction: FetchWordCountRequest = {
            type: FETCH_WORD_COUNT_REQUEST,
            payload: {
                searchedUrls: ['mock searched url'],
                url: 'mock url',
            },
        };

        const generator = fetchWordCountSaga(mockAction);

        expect(generator.next().value).toEqual(call(
            getWordCount,
            mockAction.payload.url,
        ));
        expect(generator.next().value).toEqual(put(
            fetchWordCountFailure({
                error: '500: test message',
            }),
        ));
    });

    it('should generate a successful repsonse', () => {
        const mockAction: FetchWordCountRequest = {
            type: FETCH_WORD_COUNT_REQUEST,
            payload: {
                searchedUrls: ['mock searched url'],
                url: 'mock url',
            },
        };
        const mockData: WebPageInfo = {
            url: 'mockUrl', wordCount: 1, wordsList: [{ word: 'test', count: 1 }],
        };
        // @ts-ignore - ignoring full typing for a simple mock
        getWordCount.mockResolvedValueOnce(mockData);

        const generator = fetchWordCountSaga(mockAction);

        expect(generator.next().value).toEqual(call(
            getWordCount,
            mockAction.payload.url,
        ));
        expect(generator.next().value).toEqual(put(
            fetchWordCountSuccess({
                webPageInfo: mockData,
            }),
        ));
    });
});
