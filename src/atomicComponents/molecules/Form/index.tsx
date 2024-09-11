import Button from '../../atoms/Button/index';
import TextField from '../../atoms/TextField/index';

import styles from './styles.module.sass';

import { type ButtonProps } from '../../atoms/Button';
import { type TextFieldProps } from '../../atoms/TextField';

export interface TextFieldComponentProps extends TextFieldProps {
    component: 'TEXT_FIELD';
}
export interface ButtonComponentProps extends ButtonProps {
    component: 'BUTTON';
}
interface FormProps {
    id: string;
    fields: (ButtonComponentProps | TextFieldComponentProps)[];
}

const Form = ({
    id,
    fields,
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
