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
        <Alert variant="success">
          <Alert.Heading>Notice Board</Alert.Heading>
          <p>
            Please login with your school email address to accesss full site features. We may also 
            take data from your usage to improve our website. Any Questions should be raised at the support page! 
          </p>
          <hr />
          <p className="mb-0">
            Site Scheduled for Maintenance - 12PM FRI-TUE
          </p>
        </Alert>
      </div>
    </div>

  );
};

export default Home;