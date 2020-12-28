import { render } from '@testing-library/react';
import React from 'react'
import Map from '../Map'

describe('Map TESTS', () => {
    
    it('SHOULD MOUNT MAP', () => {
        const { container } = render(<Map />);
        expect(container).toBeInTheDocument();
    });

    it('SHOULD MOUNT NONE MAP', () => {
        const { getByAltText } = render(<Map />);
        expect(getByAltText('none')).toBeInTheDocument();
    });
});
