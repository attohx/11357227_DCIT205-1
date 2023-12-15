import React from 'react'
import '../scss/globalstyles.css';
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';


function Home() {
  const [show, setShow] = useState(true);

  return (
    <div className='appcontainer'>
      <div className='spacer'></div>    

      <div className='d-flex justify-content-start'>
        <Alert show={show} variant="success">
          <Alert.Heading>Notice!</Alert.Heading>
          <p>
            Please take note that you may need an account to 
            proceed with account features. And we may use your details to improve our website.
            Scheduled site maintainance at 12PM FRIDAY - SATURDAY
          </p>
          <hr />
          <div className="d-flex justify-content-start">
            <Button onClick={() => setShow(false)} variant="outline-success">
              I agree
            </Button>
          </div>
        </Alert>
      </div>
      {!show && <Button onClick={() => setShow(true)} variant="outline-danger">Site Notice</Button>}


    </div>
    
  );
}

export default Home;