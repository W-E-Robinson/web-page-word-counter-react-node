import React, { Component, ErrorInfo } from 'react';

import Typography from '@mui/material/Typography';

import { State, Props } from './types';

import './styles.sass';

export class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
    };

    public static getDerivedStateFromError(_: Error): State {
        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Uncaught error:', error, errorInfo);
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
