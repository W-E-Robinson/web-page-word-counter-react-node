import React, { memo } from 'react'; // NOTE: react import needed?

import { Alert as MUIAlert } from '@mui/material';
import { AlertProps } from './types';

import './styles.sass';

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
