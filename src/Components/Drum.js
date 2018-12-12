import React,{Component} from 'react';
import {Image} from 'react-bootstrap'
import pic1 from '../pics/1.jpg'
import {Song} from "react-music";
import {Sampler} from 'react-music';


export default class Drum extends Component
{
constructor(props)
{
    super(props)
    this.handleDrumClick=this.handleDrumClick.bind(this)
}
    handleDrumClick()
    {

        alert (`Drum ${this.props.id} says:`)
    //SuperColider code which play the 'this.props.synt'
        //test for now
        alert(this.props.sound);

    }


render() {

    return (
        <div>
            <button
                 onClick={
                     // ()=> {console.log('clciked')}
                      this.handleDrumClick

                 }
                //disabled={true}
               >
                <Image
                    src={this.props.pic}
                rounded />







                {/*<Song*/}
                    {/*playing={true}*/}
                        {/*//{this.state.playing}*/}
                    {/*tempo={90}*/}
                {/*>*/}
                    {/*<Sampler*/}
                        {/*sample="Samples/kick.wav"*/}
                        {/*steps={[0]}/>*/}
                {/*</Song>*/}
            </button>


        </div>
    );
}
}
Drum.defaultProps={pic:pic1,sound:"BOOM BOOM POW",id:0};
