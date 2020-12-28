import { saveComment } from "Actions";
import { SAVE_COMMENT } from "Actions/types";

describe('SAVE COMMENT ACTION CREATOR', () => {
    test('CORRECT TYPE' , () => {
        console.log('saveComment()', saveComment())
        expect(saveComment().type).toEqual(SAVE_COMMENT);
    });
    test('CORRECT PAYLOAD' , () => {
        expect(saveComment('TESTE').payload).toEqual('TESTE');
    });
});