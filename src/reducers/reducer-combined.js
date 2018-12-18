import {combineReducers} from 'redux'
import InstrumentsReducer  from './reducer-picturs&sounds.js'
import OrderReducer from './reducer-displayOrder.js'
import DisplayArrayReducer from  './reducer-displayArray'
export const combinedReducers =combineReducers({
        instruments:InstrumentsReducer,
        order:OrderReducer,
        display:DisplayArrayReducer
});

