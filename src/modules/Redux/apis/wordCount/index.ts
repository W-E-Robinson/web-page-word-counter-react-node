import axios, { AxiosError, AxiosResponse } from 'axios';

import BACKEND_PORT from '../../../../constants/endpoints';
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
        const response: AxiosResponse = await axios.get(`${BACKEND_PORT}/count?url=${url}`);
        return response.data;
    } catch (error) {
        throw new APIError(
            (error as AxiosError)?.message ?? 'Unknown error',
            (error as AxiosError)?.status ?? 500,
        );
    }
};

export default getWordCount;
