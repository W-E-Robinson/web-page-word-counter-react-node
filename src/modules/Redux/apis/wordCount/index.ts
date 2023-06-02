import axios, { AxiosError } from "axios";

import { WORD_COUNT_URL } from "../../../../constants/endpoints/index";

export const getWordCount = async (
    webPageUrl: string,
) => {
    const url = `${WORD_COUNT_URL}?webPageUrl=${webPageUrl}`;

    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        const axiosError = error as AxiosError;
        return axiosError.response;
    }
};
