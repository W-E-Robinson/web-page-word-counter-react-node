import { ChangeEvent } from "react";

export interface TextFieldProps {
    id: string;
    value: string;
    label: string;
    onChange: (event: ChangeEvent) => void;
    error?: boolean;
    helperText?: string | null;
    width?: number;
}
