import { fetchWordCountRequest } from "../../../modules/Redux/actions/wordCount/actions";
import { FormMapping } from "../types";

export const formMapping: FormMapping = (url, setUrl, reduxDispatch) => {
    return [
        {
            component: "TEXT_FIELD" as const,
            id: "mock id",
            label: "Paste URL",
            onChange: (value) => setUrl(value),
            value: url,
            error: false,
            helperText: null,
        },
        {
            component: "BUTTON" as const,
            id: "reset-button",
            label: "Reset",
            variant: "outlined" as const,
            disabled: !url.length,
            onClick: () => setUrl(""),
        },
        {
            component: "BUTTON" as const,
            id: "count-button",
            label: "Count",
            variant: "contained" as const,
            disabled: !url.length,
            onClick: () => {
                reduxDispatch(fetchWordCountRequest({ webPageUrl: url }));
                setUrl("");
            },
        },
    ];
};
