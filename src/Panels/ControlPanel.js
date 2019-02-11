import React,{Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {EndSession,IndicateDrum,DisIndicateDrum} from '../actions/all.js'
import {ButtonToolbar,Button} from 'react-bootstrap'
import {SessionControler} from '../utlities/sessionUtilities'

import "../Components/DrumEnabler.css";

class ControlPanel extends Component {
    constructor(props) {
        super(props);
        // this.StartSession=this.StartSession.bind(this);
        // this.EndSession=this.EndSession.bind(this);
        this.SessionControler = SessionControler.bind(this);
    }


    render = () => {
        const SessionExample=[{id:1,timeStamp:2000},{id:2,timeStamp:2000},{id:3,timeStamp:3000},{id:4,timeStamp:4000}];
        const tempotest=9;
        const SessionExample2=SessionExample.map(({id,timeStamp})=>( {id:id, timeStamp:(timeStamp*tempotest) }) )
        console.log(SessionExample2);
return(
<div>

<ButtonToolbar>
<Button onClick={() => {this.SessionControler("startSession",SessionExample)} } className = "enableButton" >Start Session</Button>
<Button onClick={()=>{this.SessionControler("endSession")}} className = "enableButton">End Session</Button>
{/*<Button onClick={() => {*/}
    {/*this.SessionControler(SessionExample)*/}
{/*}} className = "enableButton">TEst glow</Button>*/}

</ButtonToolbar>
</div>
);
};





}


const mapStateToProps=(state)=> (
    { monitor : state.monitor}
);

function matchDispatchToProps(dispatch){
    return bindActionCreators({EndSession: EndSession , IndicateDrum: IndicateDrum,DisIndicateDrum:DisIndicateDrum }, dispatch) ;
}
export default connect(mapStateToProps,matchDispatchToProps)(ControlPanel);