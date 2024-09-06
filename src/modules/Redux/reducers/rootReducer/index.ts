import { combineReducers } from 'redux';

import { wordCountReducer } from '../wordCountReducer/index';

export type AppState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
    wordCounts: wordCountReducer,
});

export default rootReducer;
