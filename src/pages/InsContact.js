import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import '../scss/globalstyles.css';
import '../scss/gradereport.css';
import '../scss/inscontact.css';



const professors = [
  { name: 'John Doe', department: 'Computer Science', email: 'johndoe@university.edu' },
  { name: 'Jane Smith', department: 'Mathematics', email: 'janesmith@university.edu' },
  { name: 'Bob Johnson', department: 'Physics', email: 'bobjohnson@university.edu' },
  { name: 'Samantha Lee', department: 'Biology', email: 'samanthalee@university.edu' },
  { name: 'Luciana Aweder', department: 'Chemistry', email: 'lucianaawder@university.edu' },
];

function InsContact() {
  return (
    <Container>
      <div className='spacer'></div>
      <Row>
        <Col><strong>Name</strong></Col>
        <Col><strong>Department</strong></Col>
        <Col><strong>Email</strong></Col>
      </Row>
      <div className='spacer'></div>

      {professors.map((professor, index) => (
        <Row key={index}>
          <Col sm>{professor.name}</Col>
          <Col sm>{professor.department}</Col>
          <Col><button className='EmailButton'>{professor.email}</button></Col>
        </Row>
      )
      )}

    </Container>
  );
}

export default InsContact;