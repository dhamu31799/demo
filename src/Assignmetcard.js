import React from 'react';
import { Card, CardBody, CardTitle, CardText, Button, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import FileOpenIcon from '@mui/icons-material/FileOpen';

const AssessmentCard = () => {
  return (
    <Card style={{ width: '300px', borderRadius: '15px', overflow: 'hidden', position: 'relative' }}>
      <CardBody style={{ backgroundColor: '#007bff', color: 'white', padding: '2rem', display: 'flex', alignItems: 'center' }}>
        <Row >
          <Col md="8">
            <div style={{ display: 'flex', alignItems: 'center' }}>
             <FileOpenIcon  fontSize='60px'/>
             
            </div>
          </Col>
          <Col md="4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          
          </Col>
        </Row>
      </CardBody>
    
    </Card>
  );
};

export default AssessmentCard;