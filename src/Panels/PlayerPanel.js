import Drum from '../Components/DrumEnabler.js';
import React,{Component} from 'react';


import pic1 from '../pics/1.jpg' //remove later
import kik from '../samples/kick.wav'//remove later

export  default class PlayerPanel extends Component{


}
PlayerPanel.defaultProps ={
    displayArray:[true,true,true,true,true,true,true,true,true,true], //Set all drums to appear don't change
    pictures:[pic1,pic1,pic1,pic1,pic1,pic1,pic1,pic1,pic1,pic1],//remove later
    sounds:[kik,kik,kik,kik,kik,kik,kik,kik,kik,kik,]//remove later
}
