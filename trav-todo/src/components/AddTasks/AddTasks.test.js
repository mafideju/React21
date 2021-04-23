import { prettyDOM, render } from "@testing-library/react";
import AddTasks from "./AddTasks";

const setup = (props = {}) => {
    const renderResult = render(
        <AddTasks {...props} />
    );
    return {
        ...renderResult
    }
}

describe('SHOULD RENDER COMPONENT <AddTasks />', () => {
    test('SHOULD RENDER COMPONENT', () => {
        const { container } = setup();
        // console.log('container', prettyDOM(container));
        expect(container).toBeInTheDocument();
    });
})