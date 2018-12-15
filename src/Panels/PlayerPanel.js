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

        return(
            <div>
                <Grid style={{ paddingTop: '50px',width:'800px',hight:'800px'}}>

                    {this.renderRow(1)}
                    {this.renderRow(2)}
                </Grid>
            </div>
        );
    }




    renderCol=(id)=> {
       return(
            <Col md={3}>
                <Drum {...this.props.instruments
                    [
                    this.props.order.get(id)
                    ]
                      } />
            </Col>);
    };

     renderRow(rowNum)
     {
         const firstrow=1+(rowNum-1)*4

         return(
         <Row className="show-grid">
             {this.renderCol(firstrow)}
             {this.renderCol(firstrow+1)}
             {this.renderCol(firstrow+2)}
             {this.renderCol(firstrow+3)}
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
