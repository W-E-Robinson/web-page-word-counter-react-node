import { memo } from 'react';

import { TextField as MUITextField } from '@mui/material';

import styles from './styles.module.sass';

export interface TextFieldProps {
    id: string;
    value: string;
    label: string;
    onChange: (event: any) => any;
    error?: boolean;
    helperText?: string | null;
}

const TextField = memo(({
    id,
    value,
    label,
    onChange,
    error = false,
    helperText = null,
}: TextFieldProps) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };

    return (
        <MUITextField
            className={styles['text-field']}
            id={id}
            value={value}
            label={label}
            onChange={handleChange}
            error={error}
            helperText={helperText}
            aria-label={label}
            aria-invalid={!!error}
        />
    );
});

export default TextField;
