/**
 * Created by Jason on 2016/10/9.
 */


import {createStore ,combineReducers,applyMiddleware} from 'redux'

import {calculate} from './reducer'//倒入所有的reducer

const rootReducer = combineReducers({
    calculate,

})

let store = createStore(rootReducer);

export const  getStore=()=>{
    return store;
}
