import { saveComment } from "Actions";
import { SAVE_COMMENT } from "Actions/types";

describe('SAVE COMMENT ACTION CREATOR', () => {
    test('CORRECT TYPE' , () => {
        const action = saveComment().type;

        expect(action).toEqual(SAVE_COMMENT);
    });
    test('CORRECT PAYLOAD' , () => {
        const payload = saveComment('TESTE').payload;

        expect(payload).toEqual('TESTE');
    });
});