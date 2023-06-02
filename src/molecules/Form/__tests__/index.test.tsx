import React from "react";

import { render, screen } from "@testing-library/react";

import { Form } from "../index";

describe("Form testing with text field and button", () => {
    const mockOnChange = jest.fn();
    const mockOnClick = jest.fn();

    const mockFields = [
        {
            component: "TEXT_FIELD" as const,
            id: "mock id",
            label: "text field mock label",
            onChange: mockOnChange,
            value: "",
            error: false,
            helperText: null,
        },
        {
            component: "BUTTON" as const,
            id: "mock id",
            label: "button mock label",
            variant: "contained" as const,
            disabled: false,
            onClick: mockOnClick,
        },
    ];

    test("Form fields rendering", () => {
        render(<Form fields={mockFields} />);

        expect(screen.getByLabelText("text field mock label")).toBeInTheDocument();
        expect(screen.getByText("button mock label")).toBeInTheDocument();
    });
});
