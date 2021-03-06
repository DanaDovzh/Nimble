import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Container from '@material-ui/core/Container';
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
                <Container maxWidth="xs">
                    <AddRecord />
                    <ListRecords />
                </Container>
            </Provider>
        );
    }
}

export default App;
