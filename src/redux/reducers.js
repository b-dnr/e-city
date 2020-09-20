import { combineReducers } from 'redux';

import AuthReducer from './auth/reducers';
import ProductReducer from './products/reducers'
import CartReducer from './cart/reducers'

export default combineReducers(
    { 
        AuthReducer,
        ProductReducer,
        CartReducer
    }
)

