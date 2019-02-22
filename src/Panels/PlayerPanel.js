import Drum from '../Components/Drum.js';
import React,{Component} from 'react';
import {Col} from 'react-bootstrap'
import {connect} from 'react-redux'
import {renderPanel} from './renderPanelFunctions'
import {Image} from 'react-bootstrap';
import disabledPic from '../pics/blank.png'
import './PlayerPanel.css'
import TempoButton from '../Components/TempoButton.js';


 class PlayerPanel extends Component {
    constructor(props) {
        super(props)
        this.renderCol=this.renderCol.bind(this);
    }

//    render(){
//
//        return(renderPanel(this.renderCol));
//    }

    render(){

        return(
            <div>
                {renderPanel(this.renderCol)}
            <TempoButton glowing={this.props.glowing[9]}  />
            </div>
        );

    };


    renderCol=(id)=> {
       return(
            <Col md={3} lg={3} lgHidden={true} mdHidden={true}>
                {

                    this.props.display[id]?
                        (<Drum className="drumPanel"
                               isPlayer={true}
                               {...this.props.instruments[this.props.order.get(id)]}
                               id={id}
                               glowing={this.props.glowing[id]}
                               playNow={true}
                        /> )
                        :( <Image
                            // bsStyle="custom"
                            style={{width: '150px' ,height:'150px'} }
                            src={disabledPic}
                        />)

                }
            </Col>);
    };
}

const mapStateToProps=(state)=> (
{display : state.display ,  instruments : state.instruments , order : state.order ,glowing:state.glowing}
);
export default connect(mapStateToProps)(PlayerPanel);
