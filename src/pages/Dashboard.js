import React from 'react'
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';


import '../scss/globalstyles.css';


function Dashboard() {
  return (
    <div className='appcontainer'>

      <div className='spacer'></div>    
      <div className="d-flex justify-content-end">
        <Button variant="primary">
          Profile <Badge bg="secondary">1</Badge>
          <span className="visually-hidden">unread messages</span>
        </Button>
      </div>

      <div className='spacer'></div>    

      <Table striped bordered hover variant="white">
        <thead>
          <tr>
            <th>#</th>
            <th>Course</th>
            <th>Level</th>
            <th>Final Grade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Larry</td>
            <td>Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
      

      <div className='spacer'></div>    
   
    </div>
  )
}

export default Dashboard