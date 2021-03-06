import { NormalActionsState, UpdateNormalActionsAction, UPDATE_NORMAL_ACTIONS} from './types';
import { IncrementMoneyAction } from '../moneyReducer/types';

const initialState : NormalActionsState = {
   normalActions: [
       {
           name: 'teste',
           time: BigInt(20),
           currentTime: BigInt(0),
           active: true,
           completeAction: IncrementMoneyAction(BigInt(10)),
           completedTimes: BigInt(0),
       }
   ] 
}

type actions = UpdateNormalActionsAction;
const normalActionReducer = (state = initialState, action : actions ) : NormalActionsState  => {
    switch(action.type) {
        case UPDATE_NORMAL_ACTIONS:
            return {
                ...state,
                normalActions: action.payload
            }
        default:
            return state;
    }
}

export default normalActionReducer;









