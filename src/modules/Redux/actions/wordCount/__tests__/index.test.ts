import {
    fetchWordCountRequest,
    fetchWordCountFailure,
    fetchWordCountSuccess,
} from "../actions";

describe("Actions - GET /dishes", () => {
    test("fetchWordCountRequest", () => {
        expect(fetchWordCountRequest({ webPageUrl: "mock url" }).type).toBe("FETCH_WORD_COUNT_REQUEST");
    });
    test("fetchWordCountFailure", () => {
        expect(fetchWordCountFailure({ error: "mock error" }).type).toBe("FETCH_WORD_COUNT_FAILURE");
    });
    test("fetchWordCountSuccess", () => {
        expect(fetchWordCountSuccess({
            webPageInfo: {
                webPageUrl: "mock url",
                totalWordCount: 10,
                destructuredWordCount: [
                    { word: "the", count: 100 },
                    { word: "and", count: 90 },
                    { word: "umbrella", count: 2 },
                ],
            },
        }).type).toBe("FETCH_WORD_COUNT_SUCCESS");
    });
});
