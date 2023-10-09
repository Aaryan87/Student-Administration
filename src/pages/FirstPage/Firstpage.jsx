import React from "react";
import { FaUserGraduate, FaUserCog } from "react-icons/fa"; // Import icons
import { Link } from "react-router-dom";
import NavBar from "../../components/DashBoard/NavBar/NavBar";
import "./firstpage.css";

function Firstpage() {
  return (
    <div className="wrapper">
      <NavBar />
      <div className="container-welcome">
        <h1>Welcome to the School Management</h1>
        <div className="button-container">
          <Link to="/signin">
          <button className="student-button">
            <FaUserGraduate className="icon" />
            Student
          </button>
          </Link>
          <Link to="/signin">
          <button className="admin-button">
            <FaUserCog className="icon" />
            Admin
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Firstpage;
