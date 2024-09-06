import { HasUrlBeenSearched } from './types';

const hasUrlBeenSearched: HasUrlBeenSearched = (webPageUrls, targetUrl) => {
    // NOTE: needs to be separate function?
    if (webPageUrls.includes(targetUrl)) return true;
    return false;
};

export default hasUrlBeenSearched;
