import React, { Component } from 'react';

import Typography from '@mui/material/Typography';

import { State, Props } from './types';

import './styles.sass';

class ErrorBoundary extends Component<Props, State> { // NOTE: t
    public state: State = {
        hasError: false,
    };

    public static getDerivedStateFromError(): State {
        return { hasError: true };
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="error-message">
                    <Typography variant="h3">Sorry, there was an error.</Typography>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
