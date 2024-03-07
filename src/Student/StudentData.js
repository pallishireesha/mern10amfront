import React, { useEffect, useState } from 'react'
import studentstyles from "./student.module.css";
import axios from "axios";
import { NavLink } from 'react-router-dom';


const StudentData = () => {
  const[student,setStudent]=useState([]);
  useEffect(()=>{
axios.get('https://mern10ambackend.onrender.com/student')
.then(res=>{
  setStudent(res.data)
})
.catch((err)=>{
  console.log(err);
});
  });

    return (
    <>
    
<div className={`{$studentstyles.addstudent} my-1`}>
    <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                <NavLink to='/addstudent'>
                  <button className='btn btn-warning my-4 float-end'>+Add student</button>
                </NavLink>
                <div className='clearfix'></div>
               <div className="table-responsive">
                <table className='table table-bordered'>
                  <thead className='table-info'>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                  </tr>
                  </thead>
                  <tbody>
                    {
                      student.map((stu)=>{
                        return(
                          <tr>
                          <td>{stu.name}</td>
                          <td>{stu.email}</td>
                          <td>{stu.phone}</td>
                          <td>{stu.address}</td>
                          
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

export default StudentData;