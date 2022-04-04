import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from'redux-thunk';
import { produitListReducer } from './reducers/produitReducers';


const initialState={};
const reducer= combineReducers({
    produitList: produitListReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    initialState, 
    composeEnhancer(applyMiddleware(thunk))
    );

export default store;