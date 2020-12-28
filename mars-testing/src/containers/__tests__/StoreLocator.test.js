import { render } from '@testing-library/react';
import React from 'react';
import Header from '../../components/Header';

import StoreLocator from '../StoreLocator';

describe('<StoreLocator />', () => {
    const { container } = render(<StoreLocator />);
    
    test('RENDERS COMPONENT', () => {
        expect(container).toBeInTheDocument();
    });
    
    xtest('RENDERS HEADER INSIDE COMPONENT', () => {
        const child = render(<Header />);

        expect(child).toHaveLength(1);
    });
})
