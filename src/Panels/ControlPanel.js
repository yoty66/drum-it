import React,{Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {EndSession,IndicateDrum,DisIndicateDrum} from '../actions/all.js'
import {ButtonToolbar,Button} from 'react-bootstrap'
import {SessionControler} from '../utlities/sessionUtilities'
import DemoButton from '../Components/DemoButton'

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
           //  const SessionExampleSmallTom=[{id:2,timeStamp:6000}];

             const SessionExamplePart1 = SessionExampleBass.concat(SessionExampleSnare);
             const SessionExamplePart2 = SessionExamplePart1.concat(SessionExampleHH);
             const SessionExamplePart3 = SessionExamplePart2.concat(SessionExampleBigTom);
           //  const SessionExamplePart4 = SessionExamplePart3.concat(SessionExampleSmallTom);

             const offset = 32000;

             const SessionBass = SessionExampleBass.map(({id,timeStamp})=>({id:id, timeStamp:(timeStamp + offset)}));
             const SessionAddBass = SessionExampleBass.concat(SessionBass)
             console.log(SessionAddBass);

             const SessionSnare1 = SessionExamplePart1.map(({id,timeStamp})=>({id:id, timeStamp:(timeStamp + (2 * offset))}));
             const SessionAddSnare1 = SessionAddBass.concat(SessionSnare1);
             console.log(SessionAddSnare1);

             const SessionSnare2 = SessionExamplePart1.map(({id,timeStamp})=>({id:id, timeStamp:(timeStamp + (3 * offset))}));
             const SessionAddSnare2 = SessionAddSnare1.concat(SessionSnare2);
             console.log(SessionAddSnare2);

             const SessionHH1 = SessionExamplePart2.map(({id,timeStamp})=>({id:id, timeStamp:(timeStamp + (4 * offset))}));
             const SessionAddHH1 = SessionAddSnare2.concat(SessionHH1);
             console.log(SessionAddHH1);

             const SessionHH2 = SessionExamplePart2.map(({id,timeStamp})=>({id:id, timeStamp:(timeStamp + (5 * offset))}));
             const SessionAddHH2 = SessionAddHH1.concat(SessionHH2);
             console.log(SessionAddHH2);

             const SessionBigTom1 = SessionExamplePart3.map(({id,timeStamp})=>({id:id, timeStamp:(timeStamp + (6 * offset))}));
             const SessionAddBigTom1 = SessionAddHH2.concat(SessionBigTom1);
             console.log(SessionAddBigTom1);

             const SessionBigTom2 = SessionExamplePart3.map(({id,timeStamp})=>({id:id, timeStamp:(timeStamp + (7 * offset))}));
             const SessionAddBigTom2 = SessionAddBigTom1.concat(SessionBigTom2);
             console.log(SessionAddBigTom2);

    //         const SessionExPart4 = SessionExamplePart4.map(({id,timeStamp})=>({id:id, timeStamp:(timeStamp + (4 * offset))}));
    //         const SessionPart4 = SessionPart3.concat(SessionExPart4);
    //         console.log(SessionPart4);

             //here we adjust the tempo (if necessary)

             //tempotest=1 -> tempo=30
             //tempotest=2 -> tempo=60
             //tempotest=3 -> tempo=90
             //tempotest=4 -> tempo=120

             const tempotest=3;
                          const TempoSession =[];
                          var i = 1;
                          while (i < 129) {
                          TempoSession.push({id:9, timeStamp:(2000/tempotest) * i});
                          i ++ ;
                          }

             const SessionExample = SessionAddBigTom2.map(({id,timeStamp})=>({id:id, timeStamp:(timeStamp/tempotest)}));
             const FinalSession = SessionExample.concat(TempoSession);
             console.log(SessionExample);



return(
<div>

<ButtonToolbar>
<Button onClick={() => {this.SessionControler("startSession",FinalSession)} } className = "enableButton" >Start Session</Button>
<Button onClick={()=>{this.SessionControler("endSession")}} className = "enableButton">End Session</Button>
    <DemoButton/>


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