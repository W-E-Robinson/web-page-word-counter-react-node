import { HasUrlBeenSearched } from './types';

export const hasUrlBeenSearched: HasUrlBeenSearched = (webPageUrls, targetUrl) => {
    if (webPageUrls.includes(targetUrl)) return true;
    return false;
};
