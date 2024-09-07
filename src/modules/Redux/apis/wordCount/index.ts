import axios, { AxiosError, AxiosResponse } from 'axios';

import BACKEND_PORT from '../../../../constants/endpoints';
import { WebPageInfo } from '../../actions/wordCount/types';

const getWordCount = async (
    url: string,
): Promise<WebPageInfo | { message: string, status: number }> => {
    try {
        const response: AxiosResponse = await axios.get(`${BACKEND_PORT}/count?url=${url}`);
        return response.data;
    } catch (error) {
        return {
            message: (error as AxiosError)?.message ?? 'Unknown error',
            status: (error as AxiosError)?.status ?? 500,
        };
    }
};

export default getWordCount;
