import Drum from '../Components/Drum.js';
import React,{Component} from 'react';
import {Col} from 'react-bootstrap'
import {connect} from 'react-redux'
import {renderPanel} from './renderPanelFunctions'
import {Image} from 'react-bootstrap';
import disabledPic from '../pics/blank.png'
import './PlayerPanel.css'


 class PlayerPanel extends Component {
    constructor(props) {
        super(props)
        this.renderCol=this.renderCol.bind(this);
    }

    render(){

        return(renderPanel(this.renderCol));
    }


    renderCol=(id)=> {
       return(
            <Col md={3} lg={3} lgHidden={true} mdHidden={true}>
                {

                    this.props.display[id]?
                        (<Drum className="drumPanel" {...this.props.instruments[this.props.order.get(id)]} /> )
                        :( <Image
                            // bsStyle="custom"
                            //style={{width: '150px' ,height:'150px'} }
                            src={disabledPic}
                            // rounded
                        />)

                }
            </Col>);
    };
}

const mapStateToProps=(state)=> (
{display : state.display ,  instruments : state.instruments , order : state.order}
);
export default connect(mapStateToProps)(PlayerPanel);
