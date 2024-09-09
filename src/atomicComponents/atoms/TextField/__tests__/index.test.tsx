import { fireEvent, render, screen } from '@testing-library/react';

import TextField from '../index';

describe('TextField testing', () => {
    const mockOnChange = jest.fn();

    const mockProps = {
        id: 'mock id',
        label: 'mock label',
        onChange: mockOnChange,
        value: '',
        error: false,
        helperText: null,
    };

    it('should render the label', () => {
        render(<TextField
            id={mockProps.id}
            label={mockProps.label}
            onChange={mockProps.onChange}
            value={mockProps.value}
            error={mockProps.error}
            helperText={mockProps.helperText}
        />);

        expect(screen.getAllByLabelText('mock label')[0]).toBeInTheDocument();
    });
    it('should trigger the onChange mock function', () => {
        render(<TextField
            id={mockProps.id}
            label={mockProps.label}
            onChange={mockProps.onChange}
            value={mockProps.value}
            error={mockProps.error}
            helperText={mockProps.helperText}
        />);

        const textField = screen.getAllByLabelText('mock label')[0];
        fireEvent.change(textField, { target: { value: 't' } });
        expect(mockOnChange).toHaveBeenCalledWith('t');
    });
    it('render the helper text', () => {
        render(<TextField
            id={mockProps.id}
            label={mockProps.label}
            onChange={mockProps.onChange}
            value={mockProps.value}
            error={true}
            helperText="mock helper text"
        />);

        expect(screen.getByText('mock helper text')).toBeInTheDocument();
    });
});
