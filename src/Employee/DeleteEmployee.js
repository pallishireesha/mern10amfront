import React, { useEffect, useState } from 'react'
import studentstyles from "./student.module.css";
import axios from "axios";
import { NavLink } from 'react-router-dom';


const DeleteEmployee = () => {
    const[employee,setEmployee]=useState([]);
    useEffect(()=>{
  axios.get('https://mern10ambackend.onrender.com/employee')
  .then(res=>{
    setEmployee(res.data)
  })
  .catch((err)=>{
    console.log(err);
  });
    });

    const deleteData=(id)=>{
        //alert(id);
        axios.delete(`https://mern10ambackend.onrender.com/employee/${id}`)
        .then((res)=>{
            alert("Data deleted succ...");
          })
          .catch((err)=>{
            alert("unable to delete");
          });
    
      }

  return (
    <>
    <section className={studentstyles.subbanner}>
    <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='text-center'><h4>Delete Employee</h4>
                    </div>
                    <ul className='d-flex justify-content-center breadcrumb'>
                        <li className='breadcrumb-item'><NavLink to="/">Home</NavLink></li>
                        <li className='breadcrumb-item'><NavLink to="/addemployee">Delete Employee</NavLink></li>
                    </ul>
                </div>
            </div>
    </div>
    </section>
<div className={`{$studentstyles.addstudent} my-5`}>
    <div className='container my-5'>
            <div className='row'>
                <div className='col-md-12'>
               <div className="table-responsive">
                <table className='table table-bordered'>
                  <thead className='table-info'>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>salary</th>
                    <th>Address</th>
                    <th></th>
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
                          <td>
                            <button className='btn btn-danger me-3' onClick={()=>deleteData(emp._id)}>Delete</button>
                            <NavLink to={`/editemployee/${emp._id}`}>
                                <button className='btn btn-warning'>Update</button>
                            </NavLink> 
                          </td>
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

export default DeleteEmployee;