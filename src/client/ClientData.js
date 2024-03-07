import React, { useEffect, useState } from 'react'
import studentstyles from "./student.module.css";
import axios from "axios";
import { NavLink } from 'react-router-dom';


const ClientData = () => {
  const[client,setClient]=useState([]);
  useEffect(()=>{
axios.get('http://localhost:4000/client')
.then(res=>{
  setClient(res.data)
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
                        <li className='breadcrumb-item'><NavLink to="/addclient">Client Data</NavLink></li>
                    </ul>
                </div>
            </div>
    </div>
    </section>
<div className={`{$studentstyles.addstudent} my-5`}>
    <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                <NavLink to='/addclient'>
                  <button className='btn btn-warning my-4 float-end'>+Add Client</button>
                </NavLink>
                <div className='clearfix'></div>
               <div className="table-responsive">
                <table className='table table-bordered'>
                  <thead className='table-info'>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Gstin</th>
                    <th>Username</th>
                    <th>Password</th>
                    <th>Login</th>

                  </tr>
                  </thead>
                  <tbody>
                    {
                      client.map((clnt)=>{
                        return(
                          <tr>
                          <td>{clnt.name}</td>
                          <td>{clnt.email}</td>
                          <td>{clnt.phone}</td>
                          <td>{clnt.gstin}</td>
                          <td>{clnt.username}</td>
                          <td>{clnt.password}</td>
                          <td><a href='https://services.gst.gov.in/services/login'>GSTIN login</a></td>

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

export default ClientData;