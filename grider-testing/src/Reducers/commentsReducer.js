import { SAVE_COMMENT } from "Actions/types"

// const initialState = {
//     comment: ''
// }

export default (state = [], { type, payload }) => {
    switch (type) {

    case SAVE_COMMENT:
        return [ ...state, payload ]

    default:
        return state
    }
}
