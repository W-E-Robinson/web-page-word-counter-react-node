import { memo } from 'react';

import { Button as MUIButton } from '@mui/material';

import './styles.sass';

export interface ButtonProps {
    id: string;
    label: string;
    variant: 'contained' | 'outlined';
    disabled?: boolean;
    onClick: () => any;
}

const Button = memo(({
    id,
    label,
    variant,
    disabled = false,
    onClick,
}: ButtonProps) => (
    <MUIButton
        className="button"
        id={id}
        disabled={disabled}
        onClick={onClick}
        variant={variant}
        aria-disabled={disabled}
        aria-label={label}
    >
        {label}
    </MUIButton>

));

export default Button;
