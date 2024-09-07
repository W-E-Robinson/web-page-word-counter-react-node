import axios, { AxiosError } from 'axios';

import getWordCount, { APIError } from '../index';
import BACKEND_PORT from '../../../../../constants/endpoints';
import { WebPageInfo } from '../../../actions/wordCount/actions';

jest.mock('axios', () => ({
    get: jest.fn(),
}));

describe('api testing', () => {
    afterAll(() => {
        jest.restoreAllMocks();
    });

    it('returns the data on a successful getWordCount call ', () => {
        const mockUrl = 'mockUrl';
        const mockResponse: { data: WebPageInfo } = {
            data: {
                url: 'mockUrl', wordCount: 1, wordsList: [{ word: 'test', count: 1 }],
            },
        };
        // @ts-ignore - ignoring full typing for a simple mock
        axios.get.mockResolvedValueOnce(mockResponse);

        const data = getWordCount(mockUrl);
        expect(axios.get).toHaveBeenCalledWith(`http://localhost:${BACKEND_PORT}/count?url=mockUrl`);
        expect(data).toEqual({
            url: 'mockUrl', wordCount: 1, wordsList: [{ word: 'test', count: 1 }],
        });
    });

    it('throws an error with message and status', () => {
        const mockUrl = 'mockUrl';
        // @ts-ignore - ignoring full typing for a simple mock
        axios.get.mockResolvedValueOnce(new AxiosError('test message'));

        try {
            getWordCount(mockUrl);
        } catch (error) {
            expect(error).toBeInstanceOf(APIError);
        }
    });
});
