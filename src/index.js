import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App.js';
import store from './redux/store';

ReactDOM.render(<App />, document.getElementById('root'));
