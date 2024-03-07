import React, { useEffect, useState } from 'react'
import studentstyles from "./student.module.css";
import axios from "axios";
import { NavLink } from 'react-router-dom';


const UserData = () => {
  const[user,setUser]=useState([]);
  useEffect(()=>{
axios.get('http://localhost:4000/user')
.then(res=>{
  setUser(res.data)
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
                <NavLink to='/adduser'>
                  <button className='btn btn-warning my-4 float-end'>+Add User</button>
                </NavLink>
                <div className='clearfix'></div>
               <div className="table-responsive">
                <table className='table table-bordered'>
                  <thead className='table-info'>
                  <tr>
                  <th>Id</th>
                    <th>Name</th>
                    <th>Address</th>
                  </tr>
                  </thead>
                  <tbody>
                    {
                      user.map((stu)=>{
                        return(
                          <tr>
                          <td>{stu.id}</td>
                          <td>{stu.name}</td>
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

export default UserData;