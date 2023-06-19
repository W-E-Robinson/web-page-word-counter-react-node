import { HasUrlBeenSearched } from "./types";

export const hasUrlBeenSearched: HasUrlBeenSearched = (webPageUrls, targetUrl) => {
    console.info(webPageUrls);
    console.info(targetUrl);
    if (webPageUrls.includes(targetUrl)) return true;
    return false;
};
