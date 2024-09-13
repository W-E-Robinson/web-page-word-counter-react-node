import { load } from 'cheerio';

interface WordOccurence {
    word: string;
    count: number;
}

function countInformation(
    html: string,
): { wordCount: number, wordsList: WordOccurence[] } {
    const $ = load(html);
    $('script').remove();
    const words = $('body')
        .text()
        .split(/\s+/)
        .map((word) => {
            const trailingPunctuationRegex = /[.,!?]+$/;
            return word
                .replace(trailingPunctuationRegex, '')
                .toLowerCase();
        })
        .filter((word) => {
            const nonWordsRegex = /[^a-zA-Z0-9]/;
            return !nonWordsRegex.test(word) && word !== '';
        });

    const wordMap = new Map<string, number>();

    words.forEach((word) => {
        if (wordMap.has(word)) {
            wordMap.set(word, wordMap.get(word)! + 1);
        } else {
            wordMap.set(word, 1);
        }
    });

    return {
        wordCount: words.length,
        wordsList: Array
            .from(wordMap, ([word, count]) => ({ word, count }))
            .sort((a, b) => b.count - a.count),
    };
}

export default countInformation;
