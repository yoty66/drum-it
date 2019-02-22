import {combineReducers} from 'redux'
import InstrumentsReducer  from './reducer-picturs&sounds.js'
import OrderReducer from './reducer-displayOrder.js'
import DisplayArrayReducer from  './reducer-displayArray'
import SessionMonitor from './reducer-SessionMonitor'
import GlowingDrumController from './reducer-glowingDrumController'
export const combinedReducers =combineReducers({
        instruments:InstrumentsReducer,
        order:OrderReducer,
        display:DisplayArrayReducer,
        monitor:SessionMonitor,
        glowing:GlowingDrumController
});

