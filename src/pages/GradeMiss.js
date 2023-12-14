import React from 'react'
import { FormGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


function GradeMiss() {
  return (
    <div className='appcontainer'>
      <div className='spacer'></div>    

      <Form>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Student's Email"
            aria-label="Student's Email"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Text id="basic-addon2">@ug.edu.gh</InputGroup.Text>
        </InputGroup>
        <div className='spacer'></div>    

        <Form.Group>
          <Form.Select aria-label="Default select example">
            <option>Course</option>
            <option value="1">Intro.Computer Science</option>
            <option value="2">Calculus 1</option>
            <option value="3">Multi-Media</option>
            <option value="3">Data Science</option>
            <option value="3">Statistics</option>
            <option value="3">Data Mining</option>
            <option value="3">UGRC 201</option>
          </Form.Select>
        </Form.Group>
        <div className='spacer'></div>    

        
        <Form.Group>
          <Form.Select aria-label="Default select example">
            <option>Instructor</option>
            <option value="1">Professor One</option>
            <option value="2">Professor Two</option>
            <option value="3">Professor Three</option>
            <option value="3">Professor Four</option>
            <option value="3">Professor Five</option>
          </Form.Select>
        </Form.Group>
        <div className='spacer'></div>    


        <Form.Group>
          <Form.Select aria-label="Default select example">
            <option>Expected Grade</option>
            <option value="1">A</option>
            <option value="2">B</option>
            <option value="3">C</option>
            <option value="3">D</option>
            <option value="3">F</option>
          </Form.Select>
        </Form.Group>
        <div className='spacer'></div>    


        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Explanation</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Confirm Before Submission" />
        </Form.Group>
        <div className='spacer'></div>    

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <div className='spacer'></div>    

    </div>
    
  );
}

export default GradeMiss;