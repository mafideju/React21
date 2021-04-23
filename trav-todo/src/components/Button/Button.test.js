import { prettyDOM, render } from "@testing-library/react";
import Button from "./Button";

const setup = (props = {}) => {
    const renderResult = render(
        <Button {...props} />
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
