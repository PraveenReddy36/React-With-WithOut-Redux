import tileCountReducer from './reducer';
import {createStore, combineReducers} from 'redux';

const rootReducer = combineReducers(
    {
        reducer1: tileCountReducer
    }
);

const myStore = createStore(rootReducer);


export default myStore;
