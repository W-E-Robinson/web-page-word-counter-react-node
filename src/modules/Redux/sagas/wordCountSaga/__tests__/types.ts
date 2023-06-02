import { WebPageInfo } from "../../../actions/wordCount/types";

export interface Api {
    getWordCount: (webPageUrl: string) => Promise<WebPageInfo>;
}
