import { ButtonProps } from '../../atoms/Button/types';
import { TextFieldProps } from '../../atoms/TextField/types';

export interface TextFieldComponentProps extends TextFieldProps {
    component: 'TEXT_FIELD';
}

export interface ButtonComponentProps extends ButtonProps {
    component: 'BUTTON';
}

export interface FormProps {
    fields: (ButtonComponentProps | TextFieldComponentProps)[];
    id: string;
}
