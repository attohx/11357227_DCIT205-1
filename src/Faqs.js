import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function ContactForm() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control required type="text" placeholder="Enter name" />
        <Form.Control.Feedback type="invalid">
          Please enter your name.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control required type="email" placeholder="Enter email" />
        <Form.Control.Feedback type="invalid">
          Please enter a valid email address.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formBasicSubject">
        <Form.Label>Subject</Form.Label>
        <Form.Control required type="text" placeholder="Enter subject" />
        <Form.Control.Feedback type="invalid">
          Please enter a subject.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formBasicMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control
          required
          as="textarea"
          rows={3}
          placeholder="Enter message"
        />
        <Form.Control.Feedback type="invalid">
          Please enter a message.
        </Form.Control.Feedback>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
