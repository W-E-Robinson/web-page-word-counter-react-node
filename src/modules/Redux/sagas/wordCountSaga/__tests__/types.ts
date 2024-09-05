import { WebPageInfo } from '../../../actions/wordCount/types';

export interface Api {
    getWordCount: (searchedUrls: string[], webPageUrl: string) => Promise<WebPageInfo>;
}
