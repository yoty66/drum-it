import React,{Component} from 'react';
import {Image} from 'react-bootstrap';
import './Drum.css';
import {DisIndicateDrum, monitorClick} from '../actions/all'
import {bindActionCreators} from 'redux';


import connect from "react-redux/es/connect/connect";




class Drum extends Component
{
constructor(props)
{
    super(props);
    this.handlePlayToggle = this.handlePlayToggle.bind(this);
    this.time=new Date();
    this.state = {
        playing: false,
        // glowingArray:this.props.glowing[this.props.id]
    };
}
    handlePlayToggle() {
        const prevState = this.state.playing;
        this.setState({
            playing: !this.state.playing,
        });

        // !prevState==true --> THe drum is now playing
        !prevState ? this.resetPlaying():this.props.DisIndicateDrum(this.props.id);

        if(!prevState && this.props.isPlayer && localStorage.getItem('OnSession'))
        {
            const timeStamp=(new Date()).getTime()-localStorage.getItem('SessionStartTime');
            console.log(timeStamp);
            this.props.monitorClick(this.props.id,timeStamp)
        }
        // this.props.glowing=false;

    }

    resetPlaying(){
        setTimeout(()=>this.handlePlayToggle(), 70);
    }



    render() {


        return (
        <div>
            <button className={this.props.glowing?"tempoButton glowing":"tempoButton"}
            onClick={this.handlePlayToggle}> Metronome </button>
        </div>
            );


}
}

const mapStateToProps=(state)=> (
    { monitor : state.monitor
    }
);
function matchDispatchToProps(dispatch){
    return bindActionCreators({monitorClick: monitorClick , DisIndicateDrum: DisIndicateDrum},dispatch);
}
export default connect(mapStateToProps,matchDispatchToProps)(Drum);




