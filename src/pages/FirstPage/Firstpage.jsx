import React from "react";
import { FaUserGraduate, FaUserCog } from "react-icons/fa"; // Import icons
import "./firstpage.css";

function Firstpage() {
  return (
    <div className="wrapper">
      <div className="container-welcome">
        <h1>Welcome to the Dashboard</h1>
        <div className="button-container">
          <button className="student-button">
            <FaUserGraduate className="icon" />
            Student
          </button>
          <button className="admin-button">
            <FaUserCog className="icon" />
            Admin
          </button>
        </div>
      </div>
    </div>
  );
}

export default Firstpage;
