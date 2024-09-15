import { memo } from 'react';

import { Alert as MUIAlert } from '@mui/material';

import styles from './styles.module.sass';

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
        className={styles.alert}
        id={id}
        severity={severity}
        onClose={onClose}
    >
        {message}
    </MUIAlert>
));

export default Alert;
