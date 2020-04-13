
import React from 'react';
// @ts-ignore
import Select from 'react-select';
import './styles.css';
import {Container} from 'react-bootstrap'
import {Row} from 'react-bootstrap'
import {Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

let options = [
  { value: '1', label: 'MR' },
  { value: '2', label: 'DST' },
  { value: '3', label: 'Digital' },
  { value: '4', label: 'Xray' },
    { value: '5', label: 'MICT' },
];

export interface SelectedModality
{
  modalityId:number;
  selectedChange:(selecteditem)=>void;
}
function ModalitySelect(props:SelectedModality) {
 
  return (
   <div className="selectmodality" >
       <Container>
        <Row className="justify-content-md-center">
           <Col xs lg="2">
                Select Your Modality 
            </Col>
            <Col xs lg="2">  <Select options={options} onChange={props.selectedChange} /></Col>
    <Col xs lg="2">
     
    </Col>
          
        </Row>
        </Container>
 
   </div>
  );
}

export default ModalitySelect;