import React from "react";
import { useStudentData } from "../StudentDataContext";

function DisplayStudentData() {
  const { studentData } = useStudentData();
console.log(studentData)
  return (
    <div className="container">
      <h2>Student Data</h2>
      <ul>
        <li>Name: {studentData.name}</li>
        <li>Class: {studentData.classno}</li>
        <li>House No: {studentData.house}</li>
        <li>City: {studentData.city}</li>
        <li>State: {studentData.state}</li>
        <li>Email: {studentData.email}</li>
        <li>Contact No: {studentData.contact}</li>
        <li>DOB: {studentData.dob}</li>
        <li>Gender: {studentData.gender}</li>
      </ul>
    </div>
  );
}

export default DisplayStudentData;
