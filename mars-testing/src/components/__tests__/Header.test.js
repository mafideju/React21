import { render } from '@testing-library/react';
import React from 'react'
import Header from '../Header'

describe('HEADER TESTS', () => {
    
    it('should mount HEADER', () => {
        const { container } = render(<Header />);
        expect(container).toBeInTheDocument();
    });

    it('SHOULD RENDERS A LOGO IN THE HEADER', () => {
        const { getByAltText } = render(<Header />);
        const alt = getByAltText("wired-brain");
        expect(alt).toBeInTheDocument();
    });
});
