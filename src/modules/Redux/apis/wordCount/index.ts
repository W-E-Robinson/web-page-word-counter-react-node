import axios, { AxiosError } from "axios";
import { BACKEND_PORT } from "../../../../constants/endpoints";

//import { WORD_COUNT_URL } from "../../../../constants/endpoints/index";

export const getWordCount = async (
    webPageUrl: string,
) => {
    //const url = `${WORD_COUNT_URL}?webPageUrl=${webPageUrl}`;
    console.info(webPageUrl);
    const url = `${BACKEND_PORT}/greeter/hello`;

    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        const axiosError = error as AxiosError;
        return axiosError.message;
    }
};
