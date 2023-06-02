import { combineReducers } from "redux";

import { wordCountReducer } from "../wordCountReducer/index";

export const rootReducer = combineReducers({
    wordCounts: wordCountReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
