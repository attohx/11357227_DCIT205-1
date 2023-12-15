import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';



function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col md={12} className='mx-auto'>
            <h7>UGCS 2023 Copyright. All Rights Reserved</h7>
          </Col>
          
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
