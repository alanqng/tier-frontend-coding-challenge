import React from 'react';
import { render, screen } from '@testing-library/react';
import FormInput from './FormInput';

it('renders button input with corect placeholder', () => {
    render(<FormInput type="submit" value="test" />);
    const button = screen.getByText(/test/i);
    expect(button).toBeInTheDocument();
});
