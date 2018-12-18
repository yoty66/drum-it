import {combineReducers} from 'redux'
import InstrumentsReducer  from './reducer-picturs&sounds.js'
import OrderReducer from './reducer-displayOrder.js'

export const combinedReducers =combineReducers({
        instruments:InstrumentsReducer,
        order:OrderReducer
});

