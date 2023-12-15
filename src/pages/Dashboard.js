import React from 'react'
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';


import '../scss/globalstyles.css';
import '../scss/dashboard.css';



function Dashboard() {
  return (
    <div className='appcontainer'>

      <div className='spacer'></div>    
      <div className="d-flex justify-content-end">
        <Button variant="outline-danger">
          Grade Error <Badge bg="secondary">1</Badge>
          <span className="visually-hidden">unread messages</span>
        </Button>
      </div>

      <div className='spacer'></div>    

      <Table hover variant="white" className="align-items-center">
        <thead>
          <tr>
            <th>Course</th>
            <th>Level</th>
            <th>Final Grade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Int.Computer Science</td>
            <td>200</td>
            <td>A</td>
          </tr>
          <tr>
            <td>Calculus 1</td>
            <td>200</td>
            <td>A</td>
          </tr>
          <tr>
            <td>Statistics</td>
            <td>200</td>
            <td>A</td>
          </tr>
          <tr>
            <td>MultiMedia</td>
            <td>200</td>
            <td>A</td>
          </tr>
          <tr>
            <td>Data Science</td>
            <td>200</td>
            <td>A</td>
          </tr>
          <tr>
            <td>Data Mining</td>
            <td>200</td>
            <td>A</td>
          </tr>
          <tr>
            <td>UGRC 201</td>
            <td>200</td>
            <td>A</td>
          </tr>
        </tbody>
      </Table>
      

      <div className='spacer'></div>    
   
    </div>
  )
}

export default Dashboard