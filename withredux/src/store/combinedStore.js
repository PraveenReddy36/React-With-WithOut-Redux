import reducer from './reducer';
import {createStore, combineReducers} from 'redux';

const rootReducer = combineReducers(
    {
        reducer: reducer
    }
);

const myStore = createStore(rootReducer);


export default myStore;
