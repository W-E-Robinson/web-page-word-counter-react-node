import { render, screen } from '@testing-library/react';

import Alert from '../index';

describe('Alert testing', () => {
    const mockOnClose = jest.fn();

    const mockProps = {
        id: 'mock id',
        message: 'mock message',
        severity: 'success' as const,
        onClose: mockOnClose,
    };

    it('should render the message', () => {
        render(<Alert
            id={mockProps.id}
            severity={mockProps.severity}
            message={mockProps.message}
            onClose={mockProps.onClose}
        />);

        expect(screen.getByText('mock message')).toBeInTheDocument();
    });
});
