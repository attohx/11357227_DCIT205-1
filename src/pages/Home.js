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
          <Alert.Heading>My Alert</Alert.Heading>
          <p>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
            lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
            fermentum.
          </p>
          <hr />
          <div className="d-flex justify-content-start">
            <Button onClick={() => setShow(false)} variant="outline-success">
              Close me
            </Button>
          </div>
        </Alert>
      </div>
      {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}


    </div>
    
  );
}

export default Home;