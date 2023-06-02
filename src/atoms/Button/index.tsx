import React, { memo } from "react";

import { Button as MUIButton } from "@mui/material";

import { ButtonProps } from "./types";

export const Button = memo(({
    id,
    label,
    variant,
    disabled = false,
    onClick,
}: ButtonProps) => {
    return (
        <MUIButton
            id={id}
            disabled={disabled}
            onClick={onClick}
            variant={variant}
            className="button"
        >
            {label}
        </MUIButton>
    );
});
