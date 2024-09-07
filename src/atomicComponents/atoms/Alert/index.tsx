import { memo } from 'react';

import { Alert as MUIAlert } from '@mui/material';

import './styles.sass';

interface AlertProps {
    id: string;
    severity: 'success' | 'error';
    onClose: () => any;
    message: string;
}

const Alert = memo(({
    id,
    severity,
    onClose,
    message,
}: AlertProps) => (
    <MUIAlert
        className="alert"
        id={id}
        severity={severity}
        onClose={onClose}
    >
        {message}
    </MUIAlert>
));

export default Alert;
