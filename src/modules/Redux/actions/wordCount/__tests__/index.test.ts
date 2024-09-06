import {
    fetchWordCountRequest,
    fetchWordCountFailure,
    fetchWordCountSuccess,
    setWordCountProperty,
} from '../actions';

describe('Actions - GET /wordCount', () => {
    test('fetchWordCountRequest', () => {
        expect(fetchWordCountRequest({
            searchedUrls: ['mock searched url'],
            webPageUrl: 'mock url',
        }).type).toBe('FETCH_WORD_COUNT_REQUEST');
    });
    test('fetchWordCountFailure', () => {
        expect(fetchWordCountFailure({ error: 'mock error' }).type).toBe('FETCH_WORD_COUNT_FAILURE');
    });
    test('fetchWordCountSuccess', () => {
        expect(fetchWordCountSuccess({
            webPageInfo: {
                webPageUrl: 'mock url',
                totalWordCount: 10,
                destructuredWordCount: [
                    { word: 'the', count: 100 },
                    { word: 'and', count: 90 },
                    { word: 'umbrella', count: 2 },
                ],
            },
        }).type).toBe('FETCH_WORD_COUNT_SUCCESS');
    });
    test('setWordCountProperty ', () => {
        expect(setWordCountProperty({ error: null }).type).toBe('SET_WORD_COUNT_PROPERTY');
    });
});
