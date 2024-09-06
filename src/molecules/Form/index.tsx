import React from 'react';

import Button from '../../atoms/Button/index';
import TextField from '../../atoms/TextField/index';
import { FormProps } from './types';

import styles from './styles.module.sass';

const Form = ({
    fields,
    id,
}: FormProps) => (
    <div className={styles.container} aria-label={id}>
        {fields.map((field, index) => {
            if (field.component === 'TEXT_FIELD') {
                return (
                    <div key={field.id} className={styles[`${index ? 'field' : ''}`]}>
                        <TextField
                            id={field.id}
                            value={field.value}
                            label={field.label}
                            onChange={field.onChange}
                            error={field.error}
                            helperText={field.helperText}
                        />
                    </div>
                );
            } if (field.component === 'BUTTON') {
                return (
                    <div key={field.id} className={styles[`${index ? 'field' : ''}`]}>
                        <Button
                            id={field.id}
                            label={field.label}
                            variant={field.variant}
                            disabled={field.disabled}
                            onClick={field.onClick}
                        />
                    </div>
                );
            }
            return null;
        })}
    </div>
);

export default Form;
