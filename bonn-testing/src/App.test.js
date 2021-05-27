import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('BUTTON COLOR', () => {
  test('has a button with initial text', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /muda/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle({ backgroundColor: 'red' });
  });

  test('change color when clicked', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /muda/i });
    fireEvent.click(button);
    expect(button).toHaveStyle({ backgroundColor: 'blue' });
    expect(button).toHaveTextContent('muda pra azul');
  });
});

describe('CHECKBOX', () => {
  test('disable button and change style when clicked', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /muda/i });
    expect(button).toBeEnabled();

    // chamar checkbox
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();

    fireEvent.click(checkbox);
    expect(button).toBeDisabled();
    expect(button).toHaveStyle({ backgroundColor: 'gray' });
    expect(checkbox).toBeChecked();
  });
});

// Elemento: terra | Planeta regente: Vênus
// Cores: tons claros de verde, azul e rosa.
// Flores e aromas: papoula, rosa, jasmim, almíscar,
// lótus, sândalo, lírio, magnólia, verbena, hortênsia, açucena e camélia.
