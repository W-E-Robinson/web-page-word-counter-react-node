import React from "react";

import { render, screen } from "@testing-library/react";

import { Table } from "../index";

describe("Table testing", () => {
    const mockProps = {
        headers: ["Word", "Count"],
        rows: [
            { word: "the", count: 100 },
            { word: "hello", count: 3 },
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

        expect(screen.getByText("the")).toBeInTheDocument();
        expect(screen.getByText("hello")).toBeInTheDocument();
        expect(screen.getByText(100)).toBeInTheDocument();
        expect(screen.getByText(3)).toBeInTheDocument();
    });
});
