import {Grid, Row} from "react-bootstrap";
import React,{Component} from 'react';

const renderRow=(rowNum,renderColFunction)=>
{
    const firstCol=1+(rowNum-1)*4

    return(
        <Row className="show-grid">
            {renderColFunction(firstCol)}
            {renderColFunction(firstCol+1)}
            {renderColFunction(firstCol+2)}
            {renderColFunction(firstCol+3)}
        </Row>);
};
export const renderPanel=(renderColFunction)=> {
    return (
        <div>
            <Grid style={{ paddingTop: '50px',width:'800px',hight:'800px'}}>
        {renderRow(1,renderColFunction)}
            {renderRow(2,renderColFunction)}
            </Grid>
        </div>
        );
}