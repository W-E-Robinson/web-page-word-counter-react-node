import React, { memo } from "react";

import { Button as MUIButton } from "@mui/material";

import { ButtonProps } from "./types";

import "./styles.sass";

export const Button = memo(({
    id,
    label,
    variant,
    disabled = false,
    onClick,
}: ButtonProps) => {
    return (
        <MUIButton
            className="button"
            id={id}
            disabled={disabled}
            onClick={onClick}
            variant={variant}
            aria-disabled={disabled}
        >
            {label}
        </MUIButton>
    );
});
