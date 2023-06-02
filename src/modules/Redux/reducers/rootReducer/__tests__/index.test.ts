import { createStore } from "redux";

import { rootReducer } from "../index";

describe("rootReducer testing", () => {
    test("check reducer initial states", () => {
        const store = createStore(rootReducer);

        expect(store.getState().wordCounts).toEqual({
            pending: false,
            error: undefined,
            wordCountsInfo: [],
        });
    });
});
