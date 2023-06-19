import React from "react";

import { render, screen } from "@testing-library/react";

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
            { word: "seventh", count: 5 },
            { word: "eigth", count: 4 },
            { word: "ninth", count: 4 },
            { word: "tenth", count: 3 },
            { word: "eleventh", count: 3 },
            { word: "twelth", count: 1 },
        ],
    };

    test("headers rendering", () => {
        render(<Table
            headers={mockProps.headers}
            rows={mockProps.rows}
        />);

        expect(screen.getByText("Word")).toBeInTheDocument();
        expect(screen.getByText("Count")).toBeInTheDocument();
    });
    test("rows rendering", () => {
        render(<Table
            headers={mockProps.headers}
            rows={mockProps.rows}
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
    xtest("pagination", async () => {
        render(<Table
            headers={mockProps.headers}
            rows={mockProps.rows}
        />);

        expect(screen.getByText("first")).toBeInTheDocument();
        expect(screen.getByText(1000)).toBeInTheDocument();
        expect(screen.getByText("second")).toBeInTheDocument();
        expect(screen.getByText(3)).toBeInTheDocument();
    });
});
