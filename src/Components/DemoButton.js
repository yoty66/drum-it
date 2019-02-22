import React ,{Component} from 'react';
import sample from '../samples/DemoPlay.m4a';
import {
    Song,
    Sequencer,
    Sampler,
} from 'react-music';




const DemoPlayer=(playing)=>
    (
        <Song playing={playing}>
            <Sequencer resolution={1} bars={1}>
                <Sampler
                    sample={sample}
                    steps={[0]}
                />
            </Sequencer>
        </Song>
    )

export default class DemoButton extends Component{
    constructor(props)
    {
        super(props);
        this.state=
            {
                playing:false
            }
    }

    handleClick=()=>
    {

    this.setState({
        playing: !this.state.playing
        });

    }
    render()
    {
        return (
            <div>
                { console.log("got here",this.state.playing)}
            {DemoPlayer(this.state.playing)}
        <button onClick={()=>{this.handleClick()}}>
            {this.state.playing?'Cancel Demo Loop':'Play Demo'}
        </button>
                </div>
    );
    }


}

