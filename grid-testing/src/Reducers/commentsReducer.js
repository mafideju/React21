import { FETCH_COMMENTS, SAVE_COMMENT } from "Actions/types"

export default (state = [], { type, payload }) => {
    switch (type) {
        case SAVE_COMMENT:
            return [ ...state, payload ];

        case FETCH_COMMENTS:
            const comments = payload.data.map(c => c.name);
            return [ ...state, ...comments ];

        default:
            return state;
        }
}
