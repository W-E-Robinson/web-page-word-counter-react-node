import React, { memo } from "react";

import { Alert as MUIAlert } from "@mui/material";
import { AlertProps } from "./types";

import "./styles.sass";

export const Alert = memo(({
    id,
    severity,
    onClose,
    message,
}: AlertProps) => {
    return (
        <MUIAlert
            className="alert"
            id={id}
            severity={severity}
            onClose={onClose}
        >
            {message}
        </MUIAlert>
    );
});
