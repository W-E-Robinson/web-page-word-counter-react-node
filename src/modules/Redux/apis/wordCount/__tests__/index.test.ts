import axios from 'axios';

import getWordCount from '../index';

jest.mock('axios', () => ({
    get: jest.fn(),
}));

describe('api testing', () => {
    test('getWordCount', () => {
        const mockWebPageUrl = 'mockUrl';
        getWordCount(mockWebPageUrl);
        expect(axios.get).toHaveBeenCalledWith(`http://localhost:${process.env.REACT_APP_BACKEND_PORT_NUMBER}/api/counter/count?webPageUrl=mockUrl`);
    });
});
