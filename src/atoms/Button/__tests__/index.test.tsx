import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Button } from '../index';

describe('Button testing', () => {
    const mockOnClick = jest.fn();

    const mockProps = {
        id: 'mock id',
        label: 'mock label',
        variant: 'contained' as const,
        disabled: false,
        onClick: mockOnClick,
    };

    test('label rendering', () => {
        render(<Button
            id={mockProps.id}
            label={mockProps.label}
            variant={mockProps.variant}
            disabled={mockProps.disabled}
            onClick={mockProps.onClick}
        />);

        expect(screen.getByText('mock label')).toBeInTheDocument();
    });
    test('onClick function calling', () => {
        render(<Button
            id={mockProps.id}
            label={mockProps.label}
            variant={mockProps.variant}
            disabled={mockProps.disabled}
            onClick={mockProps.onClick}
        />);

        userEvent.click(screen.getByText('mock label'));
        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
    test('button is disabled', () => {
        render(<Button
            id={mockProps.id}
            label={mockProps.label}
            variant={mockProps.variant}
            disabled={true}
            onClick={mockProps.onClick}
        />);

        expect(screen.getByText('mock label').closest('button')).toBeDisabled();
    });
});
