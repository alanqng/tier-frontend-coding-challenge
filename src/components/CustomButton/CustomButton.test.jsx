import React from 'react';
import { render, screen } from '@testing-library/react';
import CustomButton from './CustomButton';

it('renders button with correct text', () => {
    render(<CustomButton label="Url:" htmlFor="shorten" type="text" id="shorten" placeholder="Url to shorten" />);
    const input = screen.getByPlaceholderText(/Url to shorten/i);
    expect(input).toBeInTheDocument();
});
