import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
<nav className="navbar navbar-expand-lg ">
  <div className="container">
    <NavLink className="navbar-brand" to="#">Navbar</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul className="navbar-nav mb-2 mb-lg-0 ">
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/studentdatafront">Student Data</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/addstudent">Add Student</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/deletestudent">Delete & Edit Student</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/adduser">Add User</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/userdata">User Data</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/deleteuser">Delete User</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/gstinterestcalculator">GST Interest Calculator</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/interestcalculator">Interest</NavLink>
        </li>
      </ul>
  
    </div>
  </div>
</nav>
    </>
  )
}

export default Header;