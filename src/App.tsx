import React from "react";

import { Alert } from "./atoms/Alert";
import { Form } from "./molecules/Form";
import { Accordion } from "./organisms/Accordion";

const mockFormFields = [
    { component: "TEXT_FIELD" as const, id: "mockId", value: "text field", label: "label", onChange: () => console.info("text field") },
    { component: "BUTTON" as const, id: "mockId", label: "label", variant: "contained" as const, disabled: false, onClick: () => console.info("text field") },
];

const mockAccordionData = [
    {
        webPageUrl: "1 mock url",
        totalWordCount: 1000,
        destructuredWordCount: [
            { word: "1 the", count: 100 },
            { word: "1 hello", count: 3 },
        ],
    },
    {
        webPageUrl: "2 mock url",
        totalWordCount: 1000,
        destructuredWordCount: [
            { word: "2 the", count: 100 },
            { word: "2 hello", count: 3 },
        ],
    },
    {
        webPageUrl: "2 mock url",
        totalWordCount: 1000,
        destructuredWordCount: [
            { word: "2 the", count: 100 },
            { word: "2 hello", count: 3 },
        ],
    },
];

export const App = () => {
    return (
        <>
            <Form fields={mockFormFields} />
            <Alert id="id" severity="success" onClose={() => console.info("onClose")} message="message" />
            <Alert id="id" severity="error" onClose={() => console.info("onClose")} message="message" />
            <Accordion accordionData={mockAccordionData} />
        </>
    );
};
