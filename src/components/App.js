import React, { Component } from 'react';
import { Provider } from 'react-redux';
import HeadLine from './HeadLine/HeadLine';
import AddRecord from './PageRecords/AddRecord/AddRecord';
import ListRecords from './PageRecords/ListRecords/ListRecords';

import './app.sass';
import store from '../redux/store';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <HeadLine title="Tracker" />
                <AddRecord />
                <ListRecords />
            </Provider>
        );
    }
}

export default App;
