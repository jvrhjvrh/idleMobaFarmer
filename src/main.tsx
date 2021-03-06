import { Button } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from './features/Layout/Header';
import { UpdateGame } from './redux/actions/common/UpdateGameAction';

const Main = () : React.ReactElement => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(UpdateGame());
    }, []);

    return(
        <Header />
    ) 
}

export default Main;
