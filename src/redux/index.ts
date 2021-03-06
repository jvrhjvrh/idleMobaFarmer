import { combineReducers } from 'redux';
import moneyReducer from './reducers/moneyReducer';
import normalActionsReducer from './reducers/normalActionsReducer';
import expReducer from './reducers/expReducer';

const rootReducer = combineReducers({
    moneyReducer,
    normalActionsReducer,
    expReducer,
})

export default rootReducer;

