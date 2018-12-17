import React,{Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {clickEnable} from '../actions/all.js'
import {Thumbnail,Button} from 'react-bootstrap'
import {Grid,Row,Col} from 'react-bootstrap'
import Drum from './Drum.js'

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
        const buttonWriting=(enabled)=>{return enabled?'Enabled':'Disabled'}
        const buttonBSStyle=(enabled)=>{return enabled?'success':'danger'}
        const id=this.props.id
        const enabled=this.state.enableArray[id]
        return (
            <Row>
                <Col md={3}>
               < Thumbnail>
                   <Drum {...this.props.instruments[this.props.order.get(id)]} />
                        <h3>{this.props.order.get(id)} <Button onClick={()=>{this.props.clickEnable(this.props.id)}} bsStyle={buttonBSStyle(enabled)}>{buttonWriting(enabled)}</Button></h3>
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