import Drum from '../Components/Drum.js';
import React,{Component} from 'react';
import {Grid,Row,Col} from 'react-bootstrap'

import pic1 from '../pics/1.jpg' //remove later
import kik from '../samples/kick.wav'//remove later

export  default class PlayerPanel extends Component {
    // constructor(props) {
    //     super(props)
    //
    // }
    render(){
        if (this.props.pictures.length !== this.props.displayArray.length
            || this.props.sounds.length !== this.props.displayArray.length) //checks that all the props ararys are of same length
        {
            alert('wrong number of params')
        }
        const row=(<Row className="show-grid">
            <Col  md={3}>
                <Drum class />
            </Col>
            <Col xs={1} md={3}>
                <Drum/>
            </Col>
            <Col xs={1} md={3}>
                <Drum/>
            </Col>
            <Col xs={1} md={3}>
                <Drum/>
            </Col>

        </Row>);
        return(
            <div>
                <Grid
                    style={{ paddingTop: '50px',width:'800px',hight:'800px'}}
                >
                    {row}
                    {row}
                </Grid>
            </div>
        );
    }
}



PlayerPanel.defaultProps ={
    displayArray : [true,true,true,true,true,true,true,true,true,true], //Set all drums to appear don't change
    pictures:[pic1,pic1,pic1,pic1,pic1,pic1,pic1,pic1,pic1,pic1],//remove later
    sounds:[kik,kik,kik,kik,kik,kik,kik,kik,kik,kik,]//remove later
}
