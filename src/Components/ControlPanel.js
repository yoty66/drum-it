import React,{Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {clickEnable} from '../actions/all.js'
import {ButtonToolbar,Button} from 'react-bootstrap'
import {Grid,Row,Col} from 'react-bootstrap'
import Drum from './Drum.js'
import "./DrumEnabler.css";
import DrumEnabler from "./DrumEnabler";

export default class ControlPanel extends Component
{
    constructor(props) {
        super(props)
        this.StartSession=this.StartSession.bind(this);
        this.EndSession=this.EndSession.bind(this);
    }

     StartSession=()=> {
    localStorage.setItem('SessionStartTime', (new Date()).getTime())
    console.log(localStorage.getItem('SessionStartTime'))
         localStorage.setItem('OnSession','True')
         alert('start session')
        }

    EndSession =()=>{
        localStorage.removeItem('SessionStartTime')
        localStorage.removeItem('OnSession')
        alert('end of session')
    }


    render=()=> (
        <div>
            <ButtonToolbar>
                <Button onClick={this.StartSession} className = "enableButton" >Start Session</Button>
                <Button onClick={this.EndSession} className = "enableButton">End Session</Button>
            </ButtonToolbar>
        </div>
    )
}