import axios from 'axios';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import { ServiceBroker } from 'moleculer';
import request from 'supertest';

import apiServiceSchema from '../../src/services/api.service';
import counterServiceSchema from '../../src/services/counter.service';

jest.mock('axios');

describe('Counter Service', () => {
    const broker = new ServiceBroker({ logger: false });
    const apiService = broker.createService(apiServiceSchema);
    broker.createService(counterServiceSchema);

    beforeAll(() => broker.start());
    afterAll(() => {
        broker.stop();
        jest.restoreAllMocks();
    });

    describe('word counting', () => {
        it('should respond with the url, number of words and a word occurence breakdown for sample1.html', async () => {
            const htmlContent = readFileSync(resolve(__dirname, '../fixtures/sample1.html'), 'utf-8');
            // @ts-ignore - ignoring typing for simple mock
            axios.get.mockResolvedValueOnce({
                data: htmlContent,
            });

            const response = await request(apiService.server).get('/count?url=https://sample1.co.uk');
            expect(response.statusCode).toBe(200);
            expect(response.body).toEqual({
                url: 'https://sample1.co.uk',
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

        it('should respond with the url, number of words and a word occurence breakdown for sample2.html', async () => {
            const htmlContent = readFileSync(resolve(__dirname, '../fixtures/sample2.html'), 'utf-8');
            // @ts-ignore - ignoring typing for simple mock
            axios.get.mockResolvedValueOnce({
                data: htmlContent,
            });

            const response = await request(apiService.server).get('/count?url=https://sample2.co.uk');
            expect(response.statusCode).toBe(200);
            expect(response.body).toEqual({
                url: 'https://sample2.co.uk',
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

        it('should respond with the url, number of words and a word occurence breakdown for sample3.html', async () => {
            const htmlContent = readFileSync(resolve(__dirname, '../fixtures/sample3.html'), 'utf-8');
            // @ts-ignore - ignoring typing for simple mock
            axios.get.mockResolvedValueOnce({
                data: htmlContent,
            });

            const response = await request(apiService.server).get('/count?url=https://sample3.co.uk');
            expect(response.statusCode).toBe(200);
            expect(response.body).toEqual({
                url: 'https://sample3.co.uk',
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

    describe('URL validation', () => {
        it('should respond with an error when the URL cannot be parsed', async () => {
            const response = await request(apiService.server).get('/count?url=not_real_URL');

            expect(response.statusCode).toBe(400);
            expect(response.body).toEqual({
                name: 'MoleculerClientError',
                message: "Supplied URL 'not_real_URL' cannot be parsed.",
                code: 400,
                type: 'Bad Request',
            });
        });
    });
});
