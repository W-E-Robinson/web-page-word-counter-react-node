import axios, { type AxiosError, type AxiosResponse } from 'axios';

import REACT_APP_BACKEND_URL from '../../../../constants/endpoints';
import { type WebPageInfo } from '../../actions/wordCount/actions';

export class APIError extends Error {
    status: number;

    constructor(message: string, status: number) {
        super(message);
        this.status = status;
    }
}

const getWordCount = async (
    url: string,
): Promise<WebPageInfo | { message: string, status: number }> => {
    try {
        const response: AxiosResponse = await axios.get(`${REACT_APP_BACKEND_URL}/count?url=${url}`);
        return response.data;
    } catch (error) {
        throw new APIError(
            (error as AxiosError)?.message ?? 'Unknown error',
            (error as AxiosError)?.status ?? 500,
        );
    }
};

export default getWordCount;
