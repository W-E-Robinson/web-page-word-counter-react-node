import { FormMapping } from "../types";

export const formMapping: FormMapping = (url, setUrl) => {
    console.info(url);
    console.info(setUrl);
    return [
        {
            component: "TEXT_FIELD" as const,
            id: "mock id",
            label: "Enter URL",
            onChange: () => console.info("text field"),
            value: "",
            error: false,
            helperText: null,
        },
        {
            component: "BUTTON" as const,
            id: "reset-button",
            label: "Reset",
            variant: "outlined" as const,
            disabled: false,
            onClick: () => console.info("reset button"),
        },
        {
            component: "BUTTON" as const,
            id: "count-button",
            label: "Count",
            variant: "contained" as const,
            disabled: false,
            onClick: () => console.info("count button"),
        },
    ];
};
