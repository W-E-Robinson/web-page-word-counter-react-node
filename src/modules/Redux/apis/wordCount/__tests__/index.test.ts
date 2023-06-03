import axios from "axios";

import { getWordCount } from "../index";

jest.mock("axios", () => {
    return {
        get: jest.fn(),
    };
});

describe("api testing", () => {
    test("getWordCount", () => {
        const mockWebPageUrl = "mockUrl";
        getWordCount(mockWebPageUrl);
        expect(axios.get).toHaveBeenCalledWith("http://localhost:3000/api/counter/count?webPageUrl=mockUrl");
    });
});
