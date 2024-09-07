import { render, screen } from '@testing-library/react';

import ErrorBoundary from '../index';

describe('ErrorBoundary testing', () => {
    const Child = () => {
        throw new Error();
    };

    it('should render the error message when there is a component tree error', () => {
        render(
            <ErrorBoundary>
                <Child />
            </ErrorBoundary>,
        );

        expect(screen.getByText('Sorry, there was an error.')).toBeInTheDocument();
    });
});
