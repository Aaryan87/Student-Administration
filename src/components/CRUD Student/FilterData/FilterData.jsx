import React from "react";
import './FilterData.css'

function FilterData({ filteredData }) {
  return (
    <div>
      <h2>Filtered Data</h2>
      <table>
        <thead>
          <tr>
            <th>RollNo</th>
            <th>Name</th>
            <th>Address</th>
            <th>Contact</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, index) => (
            <tr key={index}>
              <td>{row.rollno}</td>
              <td>{row.name}</td>
              <td>{row.address}</td>
              <td>{row.contact}</td>
              <td>{row.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FilterData;
