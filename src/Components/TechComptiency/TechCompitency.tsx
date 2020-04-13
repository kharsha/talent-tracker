import React from 'react';
import {Container,Row,Col} from 'react-bootstrap'
function TechCompitency(props) {
  return (
    <div >
       <Container>
        <Row >
          
                {props.name}} 
               
           
           <Col  lg={true}>
                Over Capability Level  
                <input></input>
            </Col>
            <Col  lg={true}>
                Overall Criticality Level
                <input></input>
            </Col>
            <Col  lg={true}>
                Experts available  
                <input></input>
            </Col>
            <Col  lg={true}>
                Experts required 
                <input></input>
            </Col>
             <Col  lg={true}>
                Bench Strength deficit %
                <input></input>
            </Col>
        </Row>
        </Container>
 
   </div>
  );
}

export default TechCompitency;
