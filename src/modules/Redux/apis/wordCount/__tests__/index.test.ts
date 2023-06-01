import axios from "axios";

import { WORD_COUNT_URL } from "../../../../../constants/endpoints";
import { getWordCount } from "../index";

jest.mock("axios", () => {
    return {
        get: jest.fn(),
    };
});

describe("api testing", () => {
    test("getWordCount", () => {
        const mockWebPageUrl = "mock url";
        getWordCount(mockWebPageUrl);
        expect(axios.get).toHaveBeenCalledWith(`${WORD_COUNT_URL}?webPageUrl=${mockWebPageUrl}`);
    });
});
