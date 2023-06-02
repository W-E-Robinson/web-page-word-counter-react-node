import React, { memo } from "react";

import { TextField as MUITextField } from "@mui/material";

import { TextFieldProps } from "./types";

import "./styles.sass";

export const TextField = memo(({
    id,
    value,
    label,
    onChange,
    error = false,
    helperText = null,
}: TextFieldProps) => {
    return (
        <MUITextField
            className="text-field"
            id={id}
            value={value}
            label={label}
            onChange={onChange}
            error={error}
            helperText={helperText}
        />
    );
});
