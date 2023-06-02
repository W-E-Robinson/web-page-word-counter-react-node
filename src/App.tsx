import React from "react";

import { Form } from "./molecules/Form";

const mockFormFields = [
    { component: "TEXT_FIELD" as const, id: "mockId", value: "text field", label: "label", onChange: () => console.info("text field") },
    { component: "BUTTON" as const, id: "mockId", label: "label", variant: "contained" as const, disabled: false, onClick: () => console.info("text field") },
];

export const App = () => {
    return (
        <Form fields={mockFormFields} />
    );
};
