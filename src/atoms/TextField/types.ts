export interface TextFieldProps {
    id: string;
    value: string;
    label: string;
    onChange: (event: any) => void;
    error?: boolean;
    helperText?: string | null;
    width?: number;
}
