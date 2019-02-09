import React,{Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {EndSession,IndicateDrum} from '../actions/all.js'
import {ButtonToolbar,Button} from 'react-bootstrap'

import "../Components/DrumEnabler.css";

class ControlPanel extends Component
{
    constructor(props) {
        super(props)
        this.StartSession=this.StartSession.bind(this);
        this.EndSession=this.EndSession.bind(this);
        // this.IndicateDrum=this.IndicateDrum.bind(this);
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
        const sessionRecords=this.props.monitor;
        console.log('session logs:',sessionRecords);
        this.props.EndSession();
    }

    // Indicate=(drumId)=>{
    //     this.props.IndicateDrum(drumId);
    //     setInterval()
    //
    // }

    render=()=> (
        <div>
            <ButtonToolbar>
                <Button onClick={this.StartSession} className = "enableButton" >Start Session</Button>
                <Button onClick={this.EndSession} className = "enableButton">End Session</Button>
                <Button onClick={()=>{this.props.IndicateDrum(8)}} className = "enableButton">TEst glow</Button>

            </ButtonToolbar>
        </div>
    )


}


const mapStateToProps=(state)=> (
    { monitor : state.monitor}
);

function matchDispatchToProps(dispatch){
    return bindActionCreators({EndSession: EndSession , IndicateDrum: IndicateDrum }, dispatch) ;
}
export default connect(mapStateToProps,matchDispatchToProps)(ControlPanel);