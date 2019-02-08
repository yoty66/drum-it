import React,{Component} from 'react';
import {Image} from 'react-bootstrap';
import './Drum.css';
import { monitorClick} from '../actions/all'
import {bindActionCreators} from 'redux';
import {
    Song,
    Sequencer,
    Sampler,
} from 'react-music';

import connect from "react-redux/es/connect/connect";




class Drum extends Component
{
constructor(props)
{
    super(props)
    this.handlePlayToggle = this.handlePlayToggle.bind(this);
    this.time=new Date();
    this.state = {
        playing: false,
    };
}
    handlePlayToggle() {
        const prevState = this.state.playing;
        this.setState({
            playing: !this.state.playing,
        });

        // !prevState==true --> THe drum is now playing
        !prevState && this.resetPlaying();

        if(!prevState && this.props.isPlayer && localStorage.getItem('OnSession'))
        {
            const timeStamp=(new Date()).getTime()-localStorage.getItem('SessionStartTime')
            console.log(timeStamp);
            this.props.monitorClick(this.props.id,timeStamp)
        }

    }

    resetPlaying(){
        setTimeout(()=>this.handlePlayToggle(), 70);
    }



    render() {

    return (
        <div>

            {this.props.monitor[this.props.id] ? "drumButtonGlowing":"drumButton"}



            <button
                className={this.props.monitor[this.props.id]?"drumButtonGlowing":"drumButton"}
                 onClick={
                      this.handlePlayToggle
                 }
                //disabled={true}
               >
                <Image className ="drumPic"

                    //style={{width: '150px' ,height:'150px'} }
                    src={this.props.pic}
                // rounded
                />
            </button>

                <Song playing={this.state.playing}>
                    <Sequencer
                        bars={10}>
                        <Sampler
                            sample={this.props.sound}
                            steps={[0]}
                        />

                    </Sequencer>

                </Song>
        </div>
    );


}
}

const mapStateToProps=(state)=> (
    { monitor : state.monitor}
);
function matchDispatchToProps(dispatch){
    return bindActionCreators({monitorClick: monitorClick},dispatch);
}
export default connect(mapStateToProps,matchDispatchToProps)(Drum);



