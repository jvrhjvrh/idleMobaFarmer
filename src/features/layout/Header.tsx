import React from 'react';
import { useSelector } from 'react-redux';
import { ExpState } from '../../redux/reducers/expReducer/types';
import { MoneyState } from '../../redux/reducers/moneyReducer/types';

interface RootState {
    moneyReducer: MoneyState,
    expReducer: ExpState,
}

const Header = () : React.ReactElement => {
    const { moneyReducer, expReducer } = useSelector((state: RootState) => state)

    return (
        <div>
            <div>
                Money: {moneyReducer.amount.toString()}
            </div>
            <div>
                Experience: {expReducer.amount.toString()}
            </div>
        </div>
    )
}

export default Header;
