import axios from 'axios';

import getWordCount, { APIError } from '../index';
import REACT_APP_BACKEND_URL from '../../../../../constants/endpoints';
import { WebPageInfo } from '../../../actions/wordCount/actions';

jest.mock('axios', () => ({
    get: jest.fn(),
}));

describe('api testing', () => {
    afterAll(() => {
        jest.restoreAllMocks();
    });

    it('returns the data on a successful getWordCount call ', async () => {
        const mockUrl = 'mockUrl';
        const mockResponse: { data: WebPageInfo } = {
            data: {
                url: 'mockUrl', wordCount: 1, wordsList: [{ word: 'test', count: 1 }],
            },
        };
        // @ts-ignore - ignoring full typing for a simple mock
        axios.get.mockResolvedValueOnce(mockResponse);

        const data = await getWordCount(mockUrl);
        expect(axios.get).toHaveBeenCalledWith(`${REACT_APP_BACKEND_URL}/count?url=mockUrl`);
        expect(data).toEqual({
            url: 'mockUrl', wordCount: 1, wordsList: [{ word: 'test', count: 1 }],
        });
    });

    it('throws an error with message and status', async () => {
        const mockUrl = 'mockUrl';
        // @ts-ignore - ignoring full typing for a simple mock
        axios.get.mockRejectedValueOnce(() => {
            throw new Error('test message');
        });

        try {
            await getWordCount(mockUrl);
        } catch (error) {
            expect(error).toBeInstanceOf(APIError);
            if (error instanceof APIError) {
                expect(error.message).toBe('Unknown error');
                expect(error.status).toBe(500);
            }
        }
    });
});
