import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Container from '@material-ui/core/Container';
import HeadLine from './HeadLine/HeadLine';
import AddRecord from './PageRecords/AddRecord/AddRecord';
import ListRecords from './PageRecords/ListRecords/ListRecords';

import './app.sass';
import store from '../redux/store';

const App = () => {
    const allTrackers = {
        trackers: [
            {
                name: 'My new tracker',
                timeTracker: '0:40:43',
            },
            {
                id: 2,
                name: 'Blue sky',
                timeTracker: '1:02:14',
            },
        ],
    };

    if (!localStorage.getItem('allTrackers')) {
        localStorage.setItem('allTrackers', JSON.stringify(allTrackers));
    }

    return (
        <Provider store={store}>
            <HeadLine title="Tracker" />
            <Container maxWidth="xs">
                <AddRecord />
                <ListRecords />
            </Container>
        </Provider>
    );
};

export default App;
