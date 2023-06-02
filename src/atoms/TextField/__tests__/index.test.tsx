import React from "react";

import { fireEvent, render, screen } from "@testing-library/react";

import { TextField } from "../index";

describe("TextField testing", () => {
    const mockOnChange = jest.fn();

    const mockProps = {
        id: "mock id",
        label: "mock label",
        onChange: mockOnChange,
        value: "",
        error: false,
        helperText: null,
    };

    test("label rendering", () => {
        render(<TextField
            id={mockProps.id}
            label={mockProps.label}
            onChange={mockProps.onChange}
            value={mockProps.value}
            error={mockProps.error}
            helperText={mockProps.helperText}
        />);

        expect(screen.getByLabelText("mock label")).toBeInTheDocument();
    });
    test("onChange mock jest firing", () => {
        render(<TextField
            id={mockProps.id}
            label={mockProps.label}
            onChange={mockProps.onChange}
            value={mockProps.value}
            error={mockProps.error}
            helperText={mockProps.helperText}
        />);

        const textField = screen.getByLabelText("mock label");
        fireEvent.change(textField, { target: { value: "1" } });
        expect(mockOnChange).toHaveBeenCalledTimes(1);
    });
    test("error and helperText", () => {
        render(<TextField
            id={mockProps.id}
            label={mockProps.label}
            onChange={mockProps.onChange}
            value={mockProps.value}
            error={true}
            helperText="mock helper text"
        />);

        expect(screen.getByText("mock helper text")).toBeInTheDocument();
    });
});
