import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardSubtitle, Nav, NavItem, NavLink, Input, Button } from 'reactstrap';
import python from "./assets/Python.png";
import './jobcard.css'
const JobCard = ({ job }) => (
  <Col md="3">
 <div className="cards">

 </div>
 <div className="cards">

 </div>
 <div className='cards'>

 </div>
 <div className='cards'>

</div>
  </Col>
);

const JobDashboard = () => {
  const jobs = [
    { id: '001', title: 'Python Developers', icon: '/path/to/python-icon.png', applicants: 258, change: 28, timeAgo: '6 mins' },
    { id: '002', title: 'Angular Developers', icon: '/path/to/angular-icon.png', applicants: 258, change: 28, timeAgo: '6 mins' },
    { id: '003', title: 'Java Developers', icon: '/path/to/java-icon.png', applicants: 258, change: 28, timeAgo: '6 mins' },
    { id: '004', title: 'UX/UI Designers', icon: '/path/to/uxui-icon.png', applicants: 258, change: 28, timeAgo: '6 mins' },
  ];

  return (
    <Row lg="7">

   
    <Container>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Posted Jobs</h1>
        <Nav>
          <NavItem>
            <NavLink href="#">View All</NavLink>
          </NavItem>
        </Nav>
      </div>
      <Nav tabs>
        <NavItem>
          <NavLink href="#" active>Active Jobs</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Inactive Jobs</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Completed Jobs</NavLink>
        </NavItem>
      </Nav>
      <Row className="mt-4">
      <Col md="3">
 <div className="cards">

 </div>

  </Col>
  <Col md="3">
 <div className="cards">

 </div>

  </Col>
  <Col md="3">
 <div className="cards">

 </div>

  </Col>
  <Col md="3">
 <div className="cards">

 </div>

  </Col>
      </Row>
      <div className="d-flex justify-content-between align-items-center mt-4">
        <Input type="search" placeholder="Search" className="w-25" />
        <Button color="primary">Filters</Button>
      </div>
    </Container>
    </Row>
  );
};

export default JobDashboard;