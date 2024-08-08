import React from 'react';
import './Faculty.css';

function Faculty() {
  return (
    <div id='faculty'>
      <h2>Faculty Details</h2>
      <table>
    <thead>
        <tr>
            <th>Sl. No.</th>
            <th>Name</th>
            <th>Designation</th>
            <th>Email</th>
            <th>Phone</th>
            <th>More</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Parashuram D Talwar</td>
            <td>Section Grade Lecture & HOD</td>
            <td>pdttalawar23@gmail.com</td>
            <td>+91 94481044224</td>
            <td><a href="#">More Info</a></td>
        </tr>
        <tr>
            <td>2</td>
            <td>Pradeep Kumar H M</td>
            <td>Lecturer</td>
            <td>pradeephmkumar@gmail.com</td>
            <td>+91 8197217970</td>
            <td><a href="#">More Info</a></td>
        </tr>
        <tr>
            <td>3</td>
            <td>Akshitha V</td>
            <td>Guest Faculty</td>
            <td>akshitha.v1@gmail.com</td>
            <td>+91 8123147131</td>
            <td><a href="#">More Info</a></td>
        </tr>
       
    </tbody>
    </table>
    </div>
  );
}

export default Faculty;
