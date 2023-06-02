export interface AlertProps {
    id: string;
    severity: "success" | "error";
    onClose: () => void;
    message: string;
}
