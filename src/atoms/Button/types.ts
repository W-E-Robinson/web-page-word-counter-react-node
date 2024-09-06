export interface ButtonProps {
    id: string;
    label: string;
    variant: 'contained' | 'outlined';
    disabled?: boolean;
    onClick: () => void;
}
