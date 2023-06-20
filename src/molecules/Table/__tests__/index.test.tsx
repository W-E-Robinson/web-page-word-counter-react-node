import React from "react";

import { fireEvent, render, screen } from "@testing-library/react";

import { Table } from "../index";

describe("Table testing", () => {
    const mockProps = {
        headers: ["Word", "Count"],
        rows: [
            { word: "first", count: 1000 },
            { word: "second", count: 600 },
            { word: "third", count: 200 },
            { word: "fourth", count: 100 },
            { word: "fifth", count: 90 },
            { word: "sixth", count: 8 },
            { word: "seventh", count: 6 },
            { word: "eigth", count: 4 },
            { word: "ninth", count: 3 },
            { word: "tenth", count: 2 },
            { word: "eleventh", count: 2 },
            { word: "twelth", count: 1 },
        ],
        caption: "mock caption",
    };

    test("headers rendering", () => {
        render(<Table
            headers={mockProps.headers}
            rows={mockProps.rows}
            caption={mockProps.caption}
        />);

        expect(screen.getByText("Word")).toBeInTheDocument();
        expect(screen.getByText("Count")).toBeInTheDocument();
    });
    test("rows rendering", () => {
        render(<Table
            headers={mockProps.headers}
            rows={mockProps.rows}
            caption={mockProps.caption}
        />);

        expect(screen.getByText("first")).toBeInTheDocument();
        expect(screen.getByText(1000)).toBeInTheDocument();
        expect(screen.getByText("second")).toBeInTheDocument();
        expect(screen.getByText(600)).toBeInTheDocument();
        expect(screen.getByText("third")).toBeInTheDocument();
        expect(screen.getByText(200)).toBeInTheDocument();
        expect(screen.getByText("fourth")).toBeInTheDocument();
        expect(screen.getByText(100)).toBeInTheDocument();
        expect(screen.getByText("fifth")).toBeInTheDocument();
        expect(screen.getByText(90)).toBeInTheDocument();
    });
    test("pagination", async () => {
        render(<Table
            headers={mockProps.headers}
            rows={mockProps.rows}
            caption={mockProps.caption}
        />);

        fireEvent.click(screen.getByTestId("KeyboardArrowRightIcon"));

        expect(await screen.findByText("sixth")).toBeInTheDocument();
        expect(await screen.findByText(8)).toBeInTheDocument();
        expect(await screen.findByText("seventh")).toBeInTheDocument();
        expect(await screen.findByText(6)).toBeInTheDocument();
        expect(await screen.findByText("eigth")).toBeInTheDocument();
        expect(await screen.findByText(4)).toBeInTheDocument();
        expect(await screen.findByText("ninth")).toBeInTheDocument();
        expect(await screen.findByText(3)).toBeInTheDocument();
        expect(await screen.findByText("tenth")).toBeInTheDocument();
        expect(await screen.findByText(2)).toBeInTheDocument();
    });
});
