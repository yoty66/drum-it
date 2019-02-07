import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap-css-only/css/bootstrap.min.css';
import './index.css';
import Drum from './Components/Drum.js';
import PlayerPanel from './Panels/PlayerPanel.js';
//store
import {combinedReducers} from './reducers/reducer-combined.js'
import ControlPanel from'./Components/ControlPanel'

import {createStore} from 'redux'
import  {Provider} from 'react-redux'
import DrumEnabler from "./Components/DrumEnabler";
import EnablePanel from "./Panels/EnablePanel";

// import 'bootstrap-css-only/css/bootstrap-grid.css';
// import 'bootstrap-css-only/css/bootstrap.css';
// import 'bootstrap-css-only/css/bootstrap-reboot.css';
// import * as serviceWorker from './serviceWorker';

 const store=createStore(combinedReducers);

console.log(store);
ReactDOM.render( <Provider store={store}>
            <PlayerPanel/>
            {/*<DrumEnabler/>*/}
        <ControlPanel/>
            <EnablePanel/>
            </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
