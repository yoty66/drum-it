import Drum from '../Components/Drum.js';
import React,{Component} from 'react';
import {Col} from 'react-bootstrap'
import {connect} from 'react-redux'
import {renderPanel} from './renderPanelFunctions'
import DrumEnabler from "../Components/DrumEnabler";


class EnablePanel extends Component {
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
                <DrumEnabler id={id} />
            </Col>);
    };
}

const mapStateToProps=(state)=> (
    { instruments : state.instruments , order : state.order}
);
export default connect(mapStateToProps)(EnablePanel);
