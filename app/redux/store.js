//importamos las funciones de redux
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import fmReducer from './reducer';

const mainReducer = combineReducers({ fm: fmReducer });

export default createStore(mainReducer,applyMiddleware(thunk));
