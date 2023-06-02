import React from "react";

import { render, screen } from "@testing-library/react";

import { WordCount } from "../index";

describe("WordCount Page testing", () => {
    test("Header rendering", () => {
        render(
            <WordCount />
        );

        expect(screen.getByText("Web Page Word Counter")).toBeInTheDocument();
        expect(screen.getByText("SITE_DESCRIPTION")).toBeInTheDocument();
    });
});
