import { createStore, combineReducers } from 'redux';
import { reducerTrackers } from './reducer/reducerTrackers';

const reducers = combineReducers({
    reducerTrackers,
});

const store = createStore(reducers);

export default store;
