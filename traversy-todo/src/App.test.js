import { prettyDOM, render, screen } from '@testing-library/react';
import App from './App';

const setup = (props = {}) => {
    const renderResult = render(
        <App {...props} />
    );
    return {
        ...renderResult
    }
}

describe('SHOULD RENDER COMPONENT <button />', () => {
    test('SHOULD RENDER COMPONENT', () => {
        const { container } = setup();
        // console.log('container', prettyDOM(container));
        expect(container).toBeInTheDocument();
    });
})
