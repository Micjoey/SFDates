import { RECEIVE_ALL_DATES, RECEIVE_DATE } from "../actions/date_actions";

const booksReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_DATE:
            return Object.assign({}, {[action.book.id]: action.book})
        case RECEIVE_ALL_DATES:
            return Object.assign({}, action.dates)
        default:
            return state;
    }
}

export default booksReducer;