import { render } from '@testing-library/react';
import React from 'react'
import Button from '../Button'

const setup = (props = {}) => {
    const renderResult = render(<Button { ...props } />);

}

describe('Button TESTS', () => {
    it('should mount BUTTON', () => {
        const { container } = render(<Button />);
        expect(container).toBeInTheDocument();
    });

    it('SHOULD MOUNT WHEN UNDEFINED', () => {
        const container = render(<Button />);

        const el = container.getAllByRole('button');

        expect(el).toBeTruthy();
    });
});
