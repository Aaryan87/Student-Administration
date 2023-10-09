import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <a href="#" className="nav__brand">
        MiniChalkpad
      </a>
      <ul className={active}>
      <Link to="/dashboard">
        <li className="nav__item">
          <a href="#" className="nav__link">
            Home
          </a>
        </li>
        </Link>
        <Link>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Admin
          </a>
        </li>
        </Link>
        <Link>
        <li className="nav__item">
          <a href="#" className="nav__link">
            AboutUs
          </a>
        </li>
        </Link>
        <Link>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Contact
          </a>
        </li>
        </Link>
        <Link to="/signin">
        <li className="nav__item">
          <a href="#" className="nav__link">
            SignIn/SignUp
          </a>
        </li>
        </Link>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default NavBar;