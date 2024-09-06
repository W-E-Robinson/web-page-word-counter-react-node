import axios, { AxiosError } from 'axios';

import { COUNTER_SERVICE } from '../../../../constants/endpoints/index';

export const getWordCount = async (
    url: string,
) => {
    try {
        const response = await axios.get(`${COUNTER_SERVICE}/count?url=${url}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        const axiosError = error as AxiosError;
        return axiosError.message;
    }
};
