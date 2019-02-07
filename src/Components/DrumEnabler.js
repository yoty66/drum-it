import React,{Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {clickEnable} from '../actions/all.js'
import {Thumbnail,Button} from 'react-bootstrap'
import {Grid,Row,Col} from 'react-bootstrap'
import Drum from './Drum.js'
import "./DrumEnabler.css";

 class DrumEnabler extends Component
{


    constructor(props)
    {
        super(props)

        this.state = {
            enableArray : this.props.display
        };
    }

    render() {

        const buttonWriting=(enabled)=>{return enabled? this.props.order.get(id) + ' Enabled':this.props.order.get(id) + " Disabled"}
        const buttonBSStyle=(enabled)=>{return enabled?'custom':'danger'}
        const id=this.props.id

const customButtonStyle = (
  <div>
    <style type="text/css">
      {`
    .btn-custom {
        background-color: black;
        color: black;
        width: 50px;
        height: 20px;

    }
    `}
    </style>
  </div>
);

        const enabled=this.state.enableArray[id]
        return (
            <Row>
                <Col md={3}>
               <Thumbnail>

                   <Drum {...this.props.instruments[this.props.order.get(id)]} />
                        <Button className = "enableButton" onClick={()=>{this.props.clickEnable(this.props.id)}} bsStyle={buttonBSStyle(enabled)}>
                        {buttonWriting(enabled)}
                        </Button>
                    </Thumbnail>
                </Col>
            </Row>
    );
    }
}
DrumEnabler.defaultProps ={id:1};

const mapStateToProps=(state)=> (
    { display : state.display , order : state.order,instruments:state.instruments}
);

function matchDispatchToProps(dispatch){
    return bindActionCreators({clickEnable: clickEnable}, dispatch);
}
export default connect(mapStateToProps,matchDispatchToProps)(DrumEnabler);