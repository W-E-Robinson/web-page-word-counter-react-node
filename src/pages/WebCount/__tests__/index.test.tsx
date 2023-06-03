import React from "react";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";

import { configureStore } from "../../../modules/Redux/store";
import { WordCount } from "../index";

const mockStore = configureStore();

describe("WordCount Page testing", () => {
    mockStore.getState().wordCounts.wordCountsInfo = [
        {
            webPageUrl: "mock url 1",
            totalWordCount: 1000,
            destructuredWordCount: [
                { word: "the", count: 110 },
                { word: "hello", count: 44 },
            ],
        },
        {
            webPageUrl: "mock url 2",
            totalWordCount: 2000,
            destructuredWordCount: [
                { word: "a", count: 102 },
                { word: "tree", count: 3 },
            ],
        },
        {
            webPageUrl: "mock url 3",
            totalWordCount: 3000,
            destructuredWordCount: [
                { word: "an", count: 101 },
                { word: "ball", count: 3 },
            ],
        },
    ];

    test("Header rendering", () => {
        render(
            <Provider store={mockStore}>
                <WordCount />,
            </Provider>,
        );

        expect(screen.getByText("Web Page Word Counter")).toBeInTheDocument();
        expect(screen.getByText("Paste a URL into the form below and click Count to find out how many words are in the page!")).toBeInTheDocument();
    });
    test("Form rendering", () => {
        render(
            <Provider store={mockStore}>
                <WordCount />,
            </Provider>,
        );

        expect(screen.getByLabelText("Enter URL")).toBeInTheDocument();
        expect(screen.getByText("Reset")).toBeInTheDocument();
        expect(screen.getByText("Count")).toBeInTheDocument();
    });
    describe("Accordion rendering", () => {
        test("accordion title information rendering", () => {
            render(
                <Provider store={mockStore}>
                    <WordCount />,
                </Provider>,
            );

            expect(screen.getByText("Word Count: 1000, Url: mock url 1")).toBeInTheDocument();
            expect(screen.getByText("Word Count: 2000, Url: mock url 2")).toBeInTheDocument();
            expect(screen.getByText("Word Count: 3000, Url: mock url 3")).toBeInTheDocument();
        });
        test("expandable data rendering", async () => {
            const { getByText, findByText } = render(
                <Provider store={mockStore}>
                    <WordCount />,
                </Provider>,
            );

            const firstAccordion = getByText("Word Count: 1000, Url: mock url 1");
            userEvent.click(firstAccordion);

            expect(await findByText("the")).toBeInTheDocument();
            expect(await findByText("hello")).toBeInTheDocument();
            expect(await findByText(110)).toBeInTheDocument();
            expect(await findByText(44)).toBeInTheDocument();
        });
    });
});
