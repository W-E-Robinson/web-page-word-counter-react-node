import React from 'react';

import { render, screen } from '@testing-library/react';

import { ErrorBoundary } from '../index';

describe('ErrorBoundary testing', () => {
    const Child = () => {
        throw new Error();
    };

    test('Error text renders on component tree error', () => {
        render(
            <ErrorBoundary>
                <Child />
            </ErrorBoundary>,
        );

        expect(screen.getByText('Sorry, there was an error.')).toBeInTheDocument();
    });
});
