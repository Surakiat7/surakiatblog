// import libs and components
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import BackButton from '@/components/Button/BackButton';

// Mock useNavigate hook
jest.mock('@/@core/utils/navigation', () => ({
  useNavigate: jest.fn(() => ({
    Back: jest.fn(),
  })),
}));

// Test suite
describe('BackButton', () => {
  // Test case 1 renders the Back button with icon
  it('renders the Back button with icon', () => {
    render(<BackButton />);

    const button = screen.getByRole('button', { name: /back/i });
    const icon = screen.getByTestId('chevron-back-icon');

    expect(button).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  });

  // Test case 2 use navigate.Back when the button is clicked
  it('calls navigate.Back when the button is clicked', () => {
    const mockBack = jest.fn();
    jest
      .spyOn(require('@/@core/utils/navigation'), 'useNavigate')
      .mockImplementation(() => ({
        Back: mockBack,
      }));

    render(<BackButton />);

    const button = screen.getByRole('button', { name: /back/i });
    fireEvent.click(button);

    expect(mockBack).toHaveBeenCalledTimes(1);
  });

  // Test case 3 verify the button has the correct CSS classes
  it('has the correct CSS classes', () => {
    render(<BackButton />);

    const button = screen.getByRole('button', { name: /back/i });

    expect(button).toHaveClass('bg-gradient-to-br');
    expect(button).toHaveClass('from-[#4EDFE7]');
    expect(button).toHaveClass('to-[#00597B]');
  });
});
