import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from './features/layout/Header';
import AllTabs from './features/tabs';
import { UpdateGame } from './redux/actions/common/UpdateGameAction';

const Main = () : React.ReactElement => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(UpdateGame());
    }, []);

    return(
        <div>
            <Header />
            <AllTabs />
        </div>
    ) 
}

export default Main;
