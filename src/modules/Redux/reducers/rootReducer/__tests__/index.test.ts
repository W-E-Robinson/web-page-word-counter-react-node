import { createStore } from 'redux';

import rootReducer from '../index';

describe('rootReducer testing', () => {
    it('should have all initial reducer states', () => {
        const store = createStore(rootReducer);

        expect(store.getState().wordCounts).toEqual({
            pending: false,
            error: null,
            wordCountsInfo: [],
        });
    });
});
