import React from 'react'
import '../scss/globalstyles.css';

import Table from 'react-bootstrap/Table';

function GradeReport() {
  return (

    <div className='appcontainer'>
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
  );
}

export default GradeReport;