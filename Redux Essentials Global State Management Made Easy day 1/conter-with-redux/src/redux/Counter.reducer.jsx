import { INCREMENT, DECREMENT } from "../redux/action.Types";

const initialState = { count: 0 };  // Initial state

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return { count: state.count + 1 };  // ✅ Returns a new state object
        case DECREMENT:
            return { count: state.count - 1 };
        default:
            return state;  // If action type doesn't match, return the current state
    }
};

export default counterReducer;
