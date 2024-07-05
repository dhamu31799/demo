import React from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import person from "./assets/person.png";
import { IoMdTime } from "react-icons/io";
function interviewcard() {
  return (
//     <div style={{width:900}}>

        
//     <Card className="mb-4">


      
// <CardBody>
//   <Row>
//     <Col md="3" className="text-center">
//       <img
//         src={person} // Assuming you have a photo URL in your data
     
//         className="rounded-circle img-fluid"
//         style={{ width: '100px', height: '100px' }}
//       />
//       <CardTitle tag="h5" className="mt-2">John Smith</CardTitle>
//       <CardSubtitle className="mb-2 text-muted">Senior Python Developer</CardSubtitle>
//       <div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
// <div > 
     
// <CalendarTodayIcon style={{color:'skyblue'}}/>
// <p style={{color:'skyblue'}}>19 Feb 2024</p>


// </div>
// <div>
     
// <IoMdTime style={{color:'skyblue'}}/>
// <p style={{color:'skyblue'}}>10:30 Am</p>


// </div>

// </div>
//     </Col>
//     <Col md="6">
//       <Row>
//         <Col><strong>1st Level:</strong> 7/10</Col>
//         <Col><strong>Interviewer:</strong> Stella</Col>
//       </Row>
//       <Row>
//         <Col><strong>2nd Level:</strong> 6/10</Col>
//         <Col><strong>Interviewer:</strong> Smith</Col>
//       </Row>
//       <Row>
//         <Col><strong>3rd Level:</strong>Waiting</Col>
//         <Col><strong>Interviewer:</strong> <a href="#">Stephan</a></Col>
//       </Row>
//       <Row>
//         <Col><strong>Meet Via:</strong>G-Meet</Col>
//         <Col><strong>Attendees:</strong> Johnson</Col>
        
//       </Row>
//       <Col md="12" className="text-center">
    
//     <Button color="primary" className="m-3">Join Meeting</Button>
//     <Button color="secondary" className="m-3">Reschedule Meeting</Button>
//   </Col>
//     </Col>

//   </Row>
// </CardBody>

// </Card>
//     </div>
<div style={{ width: 900,alignItems:'center' }}>
<Card className="mb-4">
  <CardBody>
    <Row lg="12">
      <Col md="3" className="text-center">
        <img
          src={person} // Assuming you have a photo URL in your data
          alt="Profile"
          className="rounded-circle img-fluid"
          style={{ width: '100px', height: '100px' }}
        />
        <CardTitle tag="h5" className="mt-2">John Smith</CardTitle>
        <CardSubtitle className="mb-2 text-muted">Senior Python Developer</CardSubtitle>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
          <div>
            <CalendarTodayIcon style={{ color: 'skyblue' }} />
            <p style={{ color: 'skyblue' }}>19 Feb 2024</p>
          </div>
          <div>
            <IoMdTime style={{ color: 'skyblue' }} />
            <p style={{ color: 'skyblue' }}>10:30 AM</p>
          </div>
        </div>
      </Col>
      <Col md="6">
        <Row className="bordered-row">
          <Col><strong>1st Level:</strong> 7/10</Col>
          <Col><strong>Interviewer:</strong> Stella</Col>
        </Row>
        <Row className="bordered-row">
          <Col><strong>2nd Level:</strong> 6/10</Col>
          <Col><strong>Interviewer:</strong> Smith</Col>
        </Row>
        <Row className="bordered-row">
          <Col><strong>3rd Level:</strong> Waiting</Col>
          <Col><strong>Interviewer:</strong> <a href="#">Stephan</a></Col>
        </Row>
        <Row className="bordered-row">
          <Col><strong>Meet Via:</strong> G-Meet</Col>
          <Col><strong>Attendees:</strong> Johnson</Col>
        </Row>
        <Col md="12" className="text-center">
          <Button color="primary" className="m-3">Join Meeting</Button>
          <Button color="secondary" className="m-3">Reschedule Meeting</Button>
        </Col>
      </Col>
    </Row>
  </CardBody>
</Card>
</div>

  )
}

export default interviewcard