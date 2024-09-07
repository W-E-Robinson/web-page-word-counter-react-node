import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';

import configureStore from '../../../modules/Redux/store';
import { type WebPageInfo } from '../../../modules/Redux/actions/wordCount/actions';
import WordCount from '../index';

const mockStore = configureStore();

describe('WordCount Page testing', () => {
    const mockWordCountsInfo: WebPageInfo[] = [
        {
            url: 'mock url 1',
            wordCount: 1000,
            wordsList: [
                { word: 'the', count: 110 },
                { word: 'hello', count: 44 },
            ],
        },
        {
            url: 'mock url 2',
            wordCount: 2000,
            wordsList: [
                { word: 'a', count: 102 },
                { word: 'tree', count: 3 },
            ],
        },
        {
            url: 'mock url 3',
            wordCount: 3000,
            wordsList: [
                { word: 'an', count: 101 },
                { word: 'ball', count: 3 },
            ],
        },
    ];
    // @ts-ignore - ignoring typing for simple mocking
    mockStore.getState().wordCounts.wordCountsInfo = mockWordCountsInfo;

    it('should render the Header component', () => {
        render(
            <Provider store={mockStore}>
                <WordCount />,
            </Provider>,
        );

        expect(screen.getByText('Web Page Word Counter')).toBeInTheDocument();
        expect(screen.getByText('Paste a URL into the form below and click Count to find out how many words are in the page!')).toBeInTheDocument();
    });

    it('render the Form component', () => {
        render(
            <Provider store={mockStore}>
                <WordCount />,
            </Provider>,
        );

        expect(screen.getAllByLabelText('Paste URL')[0]).toBeInTheDocument();
        expect(screen.getByText('Reset')).toBeInTheDocument();
        expect(screen.getByText('Count')).toBeInTheDocument();
    });

    describe('Accordion rendering', () => {
        it('should render the accordion titles information', () => {
            render(
                <Provider store={mockStore}>
                    <WordCount />,
                </Provider>,
            );

            expect(screen.getByText('Word Count: 1000, URL: mock url 1')).toBeInTheDocument();
            expect(screen.getByText('Word Count: 2000, URL: mock url 2')).toBeInTheDocument();
            expect(screen.getByText('Word Count: 3000, URL: mock url 3')).toBeInTheDocument();
        });

        it('render the expandable data', async () => {
            const { getByText, findByText } = render(
                <Provider store={mockStore}>
                    <WordCount />,
                </Provider>,
            );

            const firstAccordion = getByText('Word Count: 1000, URL: mock url 1');
            userEvent.click(firstAccordion);

            expect(await findByText('the')).toBeInTheDocument();
            expect(await findByText('hello')).toBeInTheDocument();
            expect(await findByText(110)).toBeInTheDocument();
            expect(await findByText(44)).toBeInTheDocument();
        });
    });
});
