import commentsReducer from "Reducers/commentsReducer";
import { SAVE_COMMENT } from "Actions/types";

describe('COMENTS REDUCER TEST', () => {
    test('SAVE COMMENTS', () => {
        const action = {
            type: SAVE_COMMENT,
            payload: 'Novo comentario'
        }

        const newState = commentsReducer([], action);

        console.log('newState', newState)
        expect(newState).toEqual(['Novo comentario']);
    });

    test('UNKNOWN TYPE', () => {
        const newState = commentsReducer([], {});

        expect(newState).toEqual([]);
    });
});