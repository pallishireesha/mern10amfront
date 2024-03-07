import React, { useEffect, useState } from 'react'
import studentstyles from "./student.module.css";
import axios from "axios";
import { NavLink } from 'react-router-dom';


const EmployeeData = () => {
  const[employee,setEmployee]=useState([]);
  useEffect(()=>{
axios.get('http://localhost:4000/employee')
.then(res=>{
  setEmployee(res.data)
})
.catch((err)=>{
  console.log(err);
});
  });

    return (
    <>
    <section className={studentstyles.subbanner}>
    <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='text-center'><h4>Home</h4>
                    </div>
                    <ul className='d-flex justify-content-center breadcrumb'>
                        <li className='breadcrumb-item'><NavLink to="/">Home</NavLink></li>
                        <li className='breadcrumb-item'><NavLink to="/addemployee">Employee Data</NavLink></li>
                    </ul>
                </div>
            </div>
    </div>
    </section>
<div className={`{$studentstyles.addstudent} my-5`}>
    <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                <NavLink to='/addemployee'>
                  <button className='btn btn-warning my-4 float-end'>+Add Employee</button>
                </NavLink>
                <div className='clearfix'></div>
               <div className="table-responsive">
                <table className='table table-bordered'>
                  <thead className='table-info'>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Salary</th>
                    <th>Address</th>
                  </tr>
                  </thead>
                  <tbody>
                    {
                      employee.map((emp)=>{
                        return(
                          <tr>
                          <td>{emp.name}</td>
                          <td>{emp.email}</td>
                          <td>{emp.phone}</td>
                          <td>{emp.salary}</td>
                          <td>{emp.address}</td>
                          
                          </tr>
                        )})
                    }
                  </tbody>
                </table>
               </div>
                </div>
                </div>
                </div>
    </div>
    </>
  )
}

export default EmployeeData;