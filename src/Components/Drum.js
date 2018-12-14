import React,{Component} from 'react';
import {Image} from 'react-bootstrap'
import { bootstrapUtils } from 'react-bootstrap/lib/utils';
import {
    Song,
    Sequencer,
    Sampler,
} from 'react-music';

import pic1 from '../pics/1.jpg' //remove later
import kik from '../samples/Bass.wav'//remove later

export default class Drum extends Component
{
constructor(props)
{
    super(props)
    this.handlePlayToggle = this.handlePlayToggle.bind(this);
    // bootstrapUtils.addStyle(Image, 'custom');

    this.state = {
        playing: false,
    };
}
    handlePlayToggle() {
        const prevState = this.state.playing;
        this.setState({
            playing: !this.state.playing,
        });

        !prevState && this.resetPlaying();
        //this.play=true;

    }

    resetPlaying(){
        setTimeout(()=>this.handlePlayToggle(), 70);
    }



    render() {

    return (
        <div>


            <button
                 onClick={
                      this.handlePlayToggle
                 }
                //disabled={true}
               >
                <Image
                    // bsStyle="custom"
                    style={{width: '200px' ,hight:'200px'} }
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

//Remove this Line in next steps
Drum.defaultProps={pic:pic1,sound:kik,id:0};

