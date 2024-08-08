import React from 'react';
import './StudentDetails.css';

function StudentDetails() {
  return (
    <div>
      <h1>Student Details</h1>
      <h3>2024-27</h3>
      <table>
        <thead>
          <tr>
            
            <td>Sem</td>
            <td>Boys</td>
            <td>Girls</td>
            <td>Total</td>
          </tr>
        </thead>
        <tbody>
          <tr>
      
            <td>1st</td>
            <td>29</td>
            <td>33</td>
            <td>62</td>
          </tr>
          
        </tbody>
        </table>

        <h3>2023-26</h3>
      <table>
        <thead>
          <tr>
        
            <td>Sem</td>
            <td>Boys</td>
            <td>Girls</td>
            <td>Total</td>
          </tr>
        </thead>
        <tbody>
          <tr>
           
            <td>2nd</td>
            <td>25</td>
            <td>45</td>
            <td>65</td>
          </tr>
          
        </tbody>
      </table>

      <h3>2022-25</h3>
      <table>
        <thead>
          <tr>
           
            <td>Sem</td>
            <td>Boys</td>
            <td>Girls</td>
            <td>Total</td>
          </tr>
        </thead>
        <tbody>
          <tr>
           
            <td>3nd</td>
            <td>25</td>
            <td>40</td>
            <td>62</td>
          </tr>
          
        </tbody>
      </table>
   
    </div>
  );
}

export default StudentDetails;
