import React from 'react';
import {Image} from 'react-bootstrap'
import pic1 from './pics/Remo.jpg'

export default class Drum extends React.Component
{
constructor(props)
{
    super(props)
    this.handleDrumClick=this.handleDrumClick.bind(this)
}
    handleDrumClick()
    {
        console.log('hi')
        alert ('hello')
    //SuperColider code which play the 'this.props.synt'
        //test for now
        alert(this.props.synt);

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
            </button>


        </div>
    );
}
}
Drum.defaultProps={pic:pic1,synt:"BOOM BOOM POW"};
