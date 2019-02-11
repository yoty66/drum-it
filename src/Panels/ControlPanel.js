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
        const SessionExampleBass= [{id:7,timeStamp:2000},{id:7,timeStamp:18000},{id:7,timeStamp:22000}];
        const SessionExampleSnare= [{id:6,timeStamp:10000},{id:6,timeStamp:26000}];
        const SessionExampleHH= [{id:5,timeStamp:14000},{id:5,timeStamp:16000},{id:5,timeStamp:30000}];
        const SessionExampleBigTom= [{id:3,timeStamp:4000}];
        const SessionExampleSmallTom=[{id:2,timeStamp:6000}];

        const SessionExamplePart1 = SessionExampleBass.concat(SessionExampleSnare);
        const SessionExamplePart2 = SessionExamplePart1.concat(SessionExampleHH);
        const SessionExamplePart3 = SessionExamplePart2.concat(SessionExampleBigTom);
        const SessionExamplePart4 = SessionExamplePart3.concat(SessionExampleSmallTom);

        const offset = 32000;

        const SessionExPart1=SessionExamplePart1.map(({id,timeStamp})=>({id:id, timeStamp:(timeStamp + offset)}));
        const SessionPart1 = SessionExampleBass.concat(SessionExPart1);
        console.log(SessionPart1);

        const SessionExPart2 = SessionExamplePart2.map(({id,timeStamp})=>({id:id, timeStamp:(timeStamp + (2 * offset))}));
        const SessionPart2 = SessionPart1.concat(SessionExPart2);
        console.log(SessionPart2);

        const SessionExPart3 = SessionExamplePart3.map(({id,timeStamp})=>({id:id, timeStamp:(timeStamp + (3 * offset))}));
        const SessionPart3 = SessionPart2.concat(SessionExPart3);
        console.log(SessionPart3);

        const SessionExPart4 = SessionExamplePart4.map(({id,timeStamp})=>({id:id, timeStamp:(timeStamp + (4 * offset))}));
        const SessionPart4 = SessionPart3.concat(SessionExPart4);
        console.log(SessionPart4);

        //here we adjust the tempo (if necessary)
        const tempotest=5;
        const SessionExample = SessionPart4.map(({id,timeStamp})=>({id:id, timeStamp:(timeStamp/tempotest)}));

        console.log(SessionExample);
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