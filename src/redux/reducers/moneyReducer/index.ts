import { DecrementMoney, DECREMENT_MONEY, IncrementMoney, INCREMENT_MONEY, MoneyState} from './types';

const initialState : MoneyState = {
    amount: BigInt(10),
}

type actions = DecrementMoney | IncrementMoney;
const moneyReducer = (state = initialState, action : actions) : MoneyState => {
    switch(action.type) {
        case INCREMENT_MONEY:
            return {
                ...state,
                amount: state.amount + action.payload
            }
        case DECREMENT_MONEY:
            return {
                ...state,
                amount: state.amount - action.payload
            }
        default: 
            return state;
    }
}

export default moneyReducer;
