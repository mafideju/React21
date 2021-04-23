import { prettyDOM, render } from "@testing-library/react";
import Task from "./Task";

const setup = (props = {}) => {
    const renderResult = render(
        <Task {...props} />
    );
    return {
        ...renderResult
    }
}

const task = {
    done: false,
    id: 1,
    name: 'Task Tracker',
    createdAt: '01-01-2021'
}

describe('SHOULD RENDER COMPONENT <button />', () => {
    test('SHOULD RENDER COMPONENT', () => {
        const { container } = setup();
        // console.log('container', prettyDOM(container));
        expect(container).toBeInTheDocument();
    });

    test('SHOULD RENDER COMPONENT AND TOGGLE TASK', () => {
        const toggleReminder = jest.fn();
        const { container } = setup({ task, toggleReminder });
        // PEGAR O NO DO DOM

        // CLICAR NA TASK
        
        //  VERIFICAR SE MUDOU TASK.DONE
        
        expect(container).toBeInTheDocument();
    });
})
