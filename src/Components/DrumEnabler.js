import Drum from './Drum.js';
import React,{Component} from 'react';
import pic1 from "../pics/1.jpg";


//Props from App include id & function

export default class DrumEnabler extends Component
{
    constructor(props)
    {
        super(props)
        this.enablerClickHandler=this.enableClickHandler.bind(this)
    }
    enablerClickHandler()
    {

    }

    render()
    {

    }

}
Drum.defaultProps={id:1 , handleNewDisableStateApp:"BOOM BOOM POW"};