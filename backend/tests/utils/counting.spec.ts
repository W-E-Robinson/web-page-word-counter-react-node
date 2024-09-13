import { readFileSync } from 'fs';
import { resolve } from 'path';

import countInformation from '../../src/utils/counting';

describe('countInformation function', () => {
    it('should return the number of words and a word occurence breakdown for sample1.html', () => {
        const countInfo = countInformation(readFileSync(resolve(__dirname, '../fixtures/sample1.html'), 'utf-8'));
        expect(countInfo).toEqual({
            wordCount: 27,
            wordsList: [
                { word: 'sample', count: 6 },
                { word: 'text', count: 4 },
                { word: 'html', count: 2 },
                { word: '1', count: 2 },
                { word: 'welcome', count: 1 },
                { word: 'to', count: 1 },
                { word: 'this', count: 1 },
                { word: 'is', count: 1 },
                { word: 'the', count: 1 },
                { word: 'content', count: 1 },
                { word: 'of', count: 1 },
                { word: 'it', count: 1 },
                { word: 'contains', count: 1 },
                { word: 'some', count: 1 },
                { word: 'for', count: 1 },
                { word: 'testing', count: 1 },
                { word: 'purposes', count: 1 },
            ],
        });
    });

    it('should return the number of words and a word occurence breakdown for sample2.html', () => {
        const countInfo = countInformation(readFileSync(resolve(__dirname, '../fixtures/sample2.html'), 'utf-8'));
        expect(countInfo).toEqual({
            wordCount: 28,
            wordsList: [
                { word: 'sample', count: 6 },
                { word: 'additional', count: 4 },
                { word: 'text', count: 4 },
                { word: 'html', count: 2 },
                { word: '2', count: 2 },
                { word: 'welcome', count: 1 },
                { word: 'to', count: 1 },
                { word: 'this', count: 1 },
                { word: 'is', count: 1 },
                { word: 'the', count: 1 },
                { word: 'content', count: 1 },
                { word: 'of', count: 1 },
                { word: 'it', count: 1 },
                { word: 'contains', count: 1 },
                { word: 'some', count: 1 },
            ],
        });
    });

    it('should return the number of words and a word occurence breakdown for sample3.html', () => {
        const countInfo = countInformation(readFileSync(resolve(__dirname, '../fixtures/sample3.html'), 'utf-8'));
        expect(countInfo).toEqual({
            wordCount: 28,
            wordsList: [
                { word: 'sample', count: 6 },
                { word: 'different', count: 4 },
                { word: 'text', count: 4 },
                { word: 'html', count: 2 },
                { word: '3', count: 2 },
                { word: 'welcome', count: 1 },
                { word: 'to', count: 1 },
                { word: 'this', count: 1 },
                { word: 'is', count: 1 },
                { word: 'the', count: 1 },
                { word: 'content', count: 1 },
                { word: 'of', count: 1 },
                { word: 'it', count: 1 },
                { word: 'includes', count: 1 },
                { word: 'some', count: 1 },
            ],
        });
    });
});
