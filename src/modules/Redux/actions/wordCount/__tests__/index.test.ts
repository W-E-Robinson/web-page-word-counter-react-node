import {
    fetchWordCountRequest,
    fetchWordCountFailure,
    fetchWordCountSuccess,
    setWordCountStateProperty,
} from '../actions';

describe('Actions - GET /wordCount', () => {
    it('should be of the correct type for fetchWordCountRequest', () => {
        expect(fetchWordCountRequest({
            searchedUrls: ['mock searched url'],
            url: 'mock url',
        }).type).toBe('FETCH_WORD_COUNT_REQUEST');
    });

    it('should be of the correct type for fetchWordCountFailure', () => {
        expect(fetchWordCountFailure({ error: 'mock error' }).type).toBe('FETCH_WORD_COUNT_FAILURE');
    });

    it('should be of the correct type for fetchWordCountSuccess', () => {
        expect(fetchWordCountSuccess({
            webPageInfo: {
                url: 'mock url',
                wordCount: 10,
                wordsList: [
                    { word: 'the', count: 100 },
                    { word: 'and', count: 90 },
                    { word: 'umbrella', count: 2 },
                ],
            },
        }).type).toBe('FETCH_WORD_COUNT_SUCCESS');
    });

    it('should be of the correct type for setWordCountStateProperty ', () => {
        expect(setWordCountStateProperty({ error: null }).type).toBe('SET_WORD_COUNT_PROPERTY');
    });
});
