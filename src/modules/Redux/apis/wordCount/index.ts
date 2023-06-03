import axios, { AxiosError } from "axios";

import { COUNTER_SERVICE } from "../../../../constants/endpoints/index";

export const getWordCount = async (
    webPageUrl: string,
) => {
    const url = `${COUNTER_SERVICE}/count?webPageUrl=${webPageUrl}`;
    console.info(webPageUrl);

    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        const axiosError = error as AxiosError;
        return axiosError.message;
    }
};
