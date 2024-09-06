import axios, { AxiosError } from 'axios';

import BACKEND_PORT from '../../../../constants/endpoints';

const getWordCount = async (
    url: string,
) => {
    try {
        const response = await axios.get(`${BACKEND_PORT}/count?url=${url}`);
        return response.data;
    } catch (error) {
        const axiosError = error as AxiosError;
        return axiosError.message;
    }
};

export default getWordCount;
