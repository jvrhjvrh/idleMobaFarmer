import { DecrementExperience, DECREMENT_EXPERIENCE, ExpState, IncrementExperience, INCREMENT_EXPERIENCE } from "./types"

const initialState : ExpState = {
    amount : BigInt(10),
}

type actions = IncrementExperience | DecrementExperience;

const expReducer = (state = initialState, action : actions) : ExpState => {
    switch (action.type) {
        case INCREMENT_EXPERIENCE:
            return {
                ...state,
                amount: state.amount + action.payload,
            };
        case DECREMENT_EXPERIENCE:
            return {
                ...state,
                amount: state.amount - action.payload,
            };
        default:
            return state;
    }
    
}

export default expReducer;
