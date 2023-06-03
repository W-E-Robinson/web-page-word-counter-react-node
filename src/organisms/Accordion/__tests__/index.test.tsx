import React from "react";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Accordion } from "../index";

describe("Accordion testing", () => {
    const mockAccordionData = [
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

    test("accordion title information rendering", () => {
        render(<Accordion accordionData={mockAccordionData} />);

        expect(screen.getByText("Word Count: 1000, URL: mock url 1")).toBeInTheDocument();
        expect(screen.getByText("Word Count: 2000, URL: mock url 2")).toBeInTheDocument();
        expect(screen.getByText("Word Count: 3000, URL: mock url 3")).toBeInTheDocument();
    });
    test("expandable data rendering", async () => {
        const { getByText, findByText } = render(<Accordion accordionData={mockAccordionData} />);

        const firstAccordion = getByText("Word Count: 1000, Url: mock url 1");
        userEvent.click(firstAccordion);

        expect(await findByText("the")).toBeInTheDocument();
        expect(await findByText("hello")).toBeInTheDocument();
        expect(await findByText(110)).toBeInTheDocument();
        expect(await findByText(44)).toBeInTheDocument();
    });
});
