import { createStore } from "redux";
import { reducers } from '../reducers/index';
import {applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(
    reducers,
    composeWithDevTools(
        applyMiddleware(thunkMiddleware)
    )
)

export default store;