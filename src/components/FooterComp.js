import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col md={12} className='mx-auto'>
            <h5>UGCS</h5>
          </Col>
          
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
