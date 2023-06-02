import React, { memo } from "react";

import { Alert as MUIAlert } from "@mui/material";
import { AlertProps } from "./types";

export const Alert = memo(({
    id,
    severity,
    onClose,
    message,
}: AlertProps) => {
    return (
        <MUIAlert
            id={id}
            severity={severity}
            onClose={onClose}
        >
            {message}
        </MUIAlert>
    );
});
