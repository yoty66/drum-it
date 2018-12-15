import Drum from '../Components/Drum.js';
import React,{Component} from 'react';
import {Grid,Row,Col} from 'react-bootstrap'
import {connect} from 'react-redux'
import pic1 from '../pics/Bass.png' //remove later
import kik from '../samples/Bass.wav'//remove later

 class PlayerPanel extends Component {
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





        return(
            <div>
                <Grid style={{ paddingTop: '50px',width:'800px',hight:'800px'}}>

                    {this.renderRow(true)}
                    {this.renderRow(false)}
                </Grid>
            </div>
        );
    }




    renderCol=(id)=> {
        alert(id)
       return(
            <Col md={3}>
                <Drum {...this.props.instruments
                    [
                    this.props.order.get(id)
                    ]
                      } />
            </Col>);


    };

     renderRow(firstRow)
     {
     if(firstRow)
     {
         return(
         <Row className="show-grid">
             {this.renderCol(1)}
             {this.renderCol(2)}
             {this.renderCol(3)}
             {this.renderCol(4)}
         </Row>);
     }
     //else
     return(
         <Row className="show-grid">
             {this.renderCol(5)}
             {this.renderCol(6)}
             {this.renderCol(7)}
             {this.renderCol(8)}
         </Row>);

 }


}

const mapStateToProps=(state)=> (
{ instruments : state.instruments , order : state.order}
);
export default connect(mapStateToProps)(PlayerPanel);

PlayerPanel.defaultProps ={
    displayArray : [true,true,true,true,true,true,true,true,true,true], //Set all drums to appear don't change
    pictures:[pic1,pic1,pic1,pic1,pic1,pic1,pic1,pic1,pic1,pic1],//remove later
    sounds:[kik,kik,kik,kik,kik,kik,kik,kik,kik,kik,]//remove later
}
