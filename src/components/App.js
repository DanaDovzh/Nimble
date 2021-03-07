import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Container from '@material-ui/core/Container';
import HeadLine from './HeadLine/HeadLine';
import AddRecord from './PageRecords/AddRecord/AddRecord';
import ListRecords from './PageRecords/ListRecords/ListRecords';

import './app.sass';
import store from '../redux/store';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { storeState: store };
    }
    render() {
        return (
            <Provider store={this.state.storeState}>
                <main className="main">
                    <HeadLine title="Tracker" />
                    <div className="wrapper">
                        <AddRecord />
                        <ListRecords />
                    </div>
                </main>
            </Provider>
        );
    }
}

export default App;
